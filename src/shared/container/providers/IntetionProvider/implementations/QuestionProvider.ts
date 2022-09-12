import { validate as isValidUUID } from 'uuid';
import { IIntetionProvider } from "../IIntetionProvider";
import IIterationDTO from "@modules/iterations/dtos/IIterationDTO";
import Messenger from '@lib/messenger';
import { container } from 'tsyringe';
import { ListDifficultiesAPIUseCase } from '@modules/difficulties/useCases/listDifficultiesAPI/ListDifficultiesAPIUseCase';
import { SESSIONTYPE_FINISHED } from '@constants/sessionType';
import SessionProcessor from '@lib/processors/sessionProcessor';
import UpdateSessionCardUseCases from '@modules/sessions/useCases/updateSessionCard/UpdateSessionCardUseCases';
import RemoveSessionAPIUseCases from '@modules/sessions/useCases/removeSessionAPI/RemoveSessionAPIUseCases';

class QuestionProvider implements IIntetionProvider {
    async process({ session, message }): Promise<IIterationDTO> {
        return this.makeMessage({
            session,
            message
        })
    }
    
    async makeMessage({ session, message }): Promise<IIterationDTO> {
        const iteration = this.getIterationById(session.iterations, session.nextId)
        if (!iteration) {
            return
        }

        const listDifficultiesAPIUseCase = container.resolve(ListDifficultiesAPIUseCase)
        const updateSessionCardUseCases = container.resolve(UpdateSessionCardUseCases)
        const difficulties = await listDifficultiesAPIUseCase.execute()     
        const nextIteration = this.getIterationByTypePosition(session.iterations, iteration.type, iteration.position)
        const difficulty = difficulties.find(x=> x.id === message)

        if (!difficulty) {
            const difficultyNotFound = Messenger.getValue('error.difficultyNotFound')
            return {
                messages: [
                    difficultyNotFound
                ]
            }
        }

        await updateSessionCardUseCases.execute({ 
            sessionsId: session.externalId,
            cardsId: iteration.cardId,
            difficultyId: difficulty.id
        })
        
        if (!nextIteration) {
            const removeSessionAPIUseCases = container.resolve(RemoveSessionAPIUseCases)
            const finishMessage = Messenger.getValue('session.completed')
            
            await removeSessionAPIUseCases.execute({ id: session.externalId })
            
            await SessionProcessor.updateOptions({ 
                session, 
                type: SESSIONTYPE_FINISHED, 
                messages: [ 
                    { message: finishMessage  }
                ]
            })

            return {
                messages: [
                    finishMessage
                ]
            }
        }

        const responseMessage = nextIteration.secretContent ? 
            nextIteration.content.concat("\n", nextIteration.secretContent) : 
            nextIteration.content
            
        const options = difficulties.map(d => {
            return {
                slug: d.id,
                content: d.name
            }
        })

        SessionProcessor.updateIteration({ session, iteration: nextIteration })

        return {
            options,
            messages: [
                responseMessage
            ]
        }
    }

    getIterationById(iterations, id) {
        if (!iterations || !id) {
            return
        }

        return iterations.find(x=> x.id === id)
    }

    getIterationByTypePosition(iterations, type, position) {
        position = position + 1
        return iterations.find(x=> x.type === type && x.position === position)
    }
}

export { QuestionProvider };
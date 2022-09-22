import { IIntetionProvider } from "../IIntetionProvider";
import IIterationDTO from "@modules/iterations/dtos/IIterationDTO";
import Messenger from "@lib/messenger";
import IndexSessionAPIUseCases from "@modules/sessions/useCases/indexSessionAPI/IndexSessionAPIUseCases";
import { container } from "tsyringe";
import SessionProcessor from "@lib/processors/sessionProcessor";
import { SESSIONTYPE_QUESTION } from "@constants/sessionType";
import { ListDifficultiesAPIUseCase } from "@modules/difficulties/useCases/listDifficultiesAPI/ListDifficultiesAPIUseCase";
import Utils from "@lib/utils";

class QuestionWelcomeProvider implements IIntetionProvider {
    async process({ user, session, message }): Promise<IIterationDTO> {
        if (!Utils.isUUID(message)) {
            const invalid_message = Messenger.getValue('error.invalidMessage')
            return {
                messages: [ invalid_message ]
            }
        }

        const indexSessionAPIUseCases = container.resolve(IndexSessionAPIUseCases)
        const sessionAPI = await indexSessionAPIUseCases.execute({ id: message })

        if (!sessionAPI || !sessionAPI.cards || sessionAPI.cards.length == 0) {
            const session_notfound = Messenger.getValue('error.sessionNotFound')
            return {
                messages: [ session_notfound ]
            }
        } 

        return this.makeMessage({ session, sessionAPI })
    }
    
    async makeMessage({ session, sessionAPI }): Promise<IIterationDTO> {
        const listDifficultiesAPIUseCase = container.resolve(ListDifficultiesAPIUseCase)
        const difficulties = await listDifficultiesAPIUseCase.execute()     
        const messages = sessionAPI.cards.map(c => {
            return {
                cardId: c.id,
                message: c.content.concat("\n", c.secretContent)
            } 
        })
        const options = difficulties.map(d => {
            return {
                slug: d.id,
                content: d.name
            }
        })
        const sessionInit = Messenger.getValue('session.init', [ 
            { key: 'sessionName', value: sessionAPI.deck.name }
        ])
        
        await SessionProcessor.updateOptions({ 
            session, 
            type: SESSIONTYPE_QUESTION, 
            messages: messages,
            options,
            externalId: sessionAPI.id
        })

        return {
            options,
            messages: [
                sessionInit,
                messages[0].message
            ]
        }
    }
}

export { QuestionWelcomeProvider };
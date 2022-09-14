import { IIntetionProvider } from "../IIntetionProvider";
import IIterationDTO from "@modules/iterations/dtos/IIterationDTO";
import Messenger from "@lib/messenger";
import SessionProcessor from "@lib/processors/sessionProcessor";
import { SESSIONTYPE_WELCOME } from "@constants/sessionType";
import SearchUserAPIUseCases from "@modules/users/useCases/searchUserAPI/SearchUserAPIUseCases";
import { container } from "tsyringe";
import UpdateUserUseCases from "@modules/users/useCases/updateUser/updateUserUseCases";

class ValidationProvider implements IIntetionProvider {
    async process({ user, session, message }): Promise<IIterationDTO> {
        const searchUserAPIUseCases = container.resolve(SearchUserAPIUseCases)
        const userAPI = await searchUserAPIUseCases.execute({ code: message })

        if (!userAPI) {
            const userNotFound = Messenger.getValue('user.notFound')  
            return {
                messages: [ userNotFound ]
            }  
        }

        return this.makeMessage({
            session, user, userAPI
        })
    }
    
    async makeMessage({ session, user, userAPI }): Promise<IIterationDTO> {
        const updateUserUseCases = container.resolve(UpdateUserUseCases)
        await updateUserUseCases.execute({
            id: user.id,
            key: user.key,
            channelType: user.channelType,
            externalId: userAPI.id
         })

        const options = [ { slug: 'init', content: 'Iniciar' } ]
        const userFound = Messenger.getValue('user.found')
        await SessionProcessor.update({ 
            session, 
            type: SESSIONTYPE_WELCOME, 
            options,
            messages: [ userFound ] 
        })

        return {
            messages: [ userFound ]
        }
    }
}

export { ValidationProvider };
import { IIntetionProvider } from "../IIntetionProvider";
import IIterationDTO from "@modules/iterations/dtos/IIterationDTO";
import Messenger from "@lib/messenger";
import SessionProcessor from "@lib/processors/sessionProcessor";
import { SESSIONTYPE_WELCOME } from "@constants/sessionType";

class ValidationProvider implements IIntetionProvider {
    async process({ user, session, message }): Promise<IIterationDTO> {
        if (!user || !user.externalId) {
            const userNotFound = Messenger.getValue('user.notFound')  
            return {
                messages: [ userNotFound ]
            }  
        }

        return this.makeMessage({
            session
        })
    }
    
    async makeMessage({ session }): Promise<IIterationDTO> {
        const options = [ { slug: 'init', content: 'Iniciar' } ]
        const userFound = Messenger.getValue('user.found')
        await SessionProcessor.update({ 
            session, 
            type: SESSIONTYPE_WELCOME, 
            options,
            messages: [ userFound ] 
        })

        return {
            messages: [ userFound ],
            options
        }
    }
}

export { ValidationProvider };
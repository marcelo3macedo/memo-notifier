import { IIntetionProvider } from "../IIntetionProvider";
import IIterationDTO from "@modules/iterations/dtos/IIterationDTO";
import Messenger from "@lib/messenger";
import SessionProcessor from "@lib/processors/sessionProcessor";
import { SESSIONTYPE_AUTH_VALIDATION } from "@constants/sessionType";

class AuthProvider implements IIntetionProvider {
    async process({ session }): Promise<IIterationDTO> {
        return this.makeMessage({
            session
        })
    }
    
    async makeMessage({ session }): Promise<IIterationDTO> {
        const authMessage = Messenger.getValue('auth.login')
        await SessionProcessor.update({ 
            session, 
            type: SESSIONTYPE_AUTH_VALIDATION, 
            messages: [ authMessage ] 
        })

        return {
            messages: [ authMessage ]
        }
    }
}

export { AuthProvider };
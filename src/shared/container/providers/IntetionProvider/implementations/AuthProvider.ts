import { IIntetionProvider } from "@shared/container/providers/IntetionProvider/IIntetionProvider";
import IIterationDTO from "@modules/iterations/dtos/IIterationDTO";
import Messenger from "@lib/messenger";
import SessionProcessor from "@lib/processors/sessionProcessor";
import { SESSIONTYPE_AUTH_VALIDATION } from "@constants/sessionType";
import RecoverIntegrationUseCases from "@modules/integrations/useCases/recoverIntegration/RecoverIntegrationUseCases";
import { container } from "tsyringe";
import { CHANNEL_TELEGRAM } from "@constants/channels";
import integrate from "@config/integrate";

class AuthProvider implements IIntetionProvider {
    async process({ user, session }): Promise<IIterationDTO> {
        return this.makeMessage({
            user, session
        })
    }
    
    async makeMessage({ user, session }): Promise<IIterationDTO> {
        const recoverIntegrationUseCases = container.resolve(RecoverIntegrationUseCases)
        const integration = await recoverIntegrationUseCases.execute({ type: CHANNEL_TELEGRAM, id: user.id, name: user.name })        
        const authMessage = Messenger.getValue('auth.login')
        const options = [
            { url: `${integrate.endpoint}/${CHANNEL_TELEGRAM}/${integration.id}`, content: Messenger.getValue('auth.title') }
        ]
        
        await SessionProcessor.update({ 
            session, 
            type: SESSIONTYPE_AUTH_VALIDATION, 
            messages: [ authMessage ] 
        })

        return {
            options,
            messages: [ authMessage ]
        }
    }
}

export { AuthProvider };

import { container } from "tsyringe";
import { IIntetionProvider } from "@shared/container/providers/IntetionProvider/IIntetionProvider";
import IIterationDTO from "@modules/iterations/dtos/IIterationDTO";
import Messenger from "@lib/messenger";
import SessionProcessor from "@lib/processors/sessionProcessor";
import { SESSIONTYPE_WELCOME } from "@constants/sessionType";
import RecoverIntegrationUseCases from "@modules/integrations/useCases/recoverIntegration/RecoverIntegrationUseCases";
import { CHANNEL_TELEGRAM } from "@constants/channels";
import integrate from "@config/integrate";

class ValidationProvider implements IIntetionProvider {
    async process({ user, session, message }): Promise<IIterationDTO> {
        if (!user || !user.externalId) {
            const recoverIntegrationUseCases = container.resolve(RecoverIntegrationUseCases)
            const integration = await recoverIntegrationUseCases.execute({ type: CHANNEL_TELEGRAM, id: user.id, name: user.name })        
            const options = [
                { url: `${integrate.endpoint}/${CHANNEL_TELEGRAM}/${integration.id}`, content: Messenger.getValue('auth.title') }
            ]
            const userNotFound = Messenger.getValue('user.notFound')  
            return {
                options,
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
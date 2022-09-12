import { IIntetionProvider } from "../IIntetionProvider";
import IIterationDTO from "@modules/iterations/dtos/IIterationDTO";
import SessionProcessor from "@lib/processors/sessionProcessor";
import Messenger from "@lib/messenger";
import { SESSIONTYPE_FINISHED } from "@constants/sessionType";

class FinishProvider implements IIntetionProvider {
    async process({ session }): Promise<IIterationDTO> {
        return this.makeMessage({
            session
        })
    }
    
    async makeMessage({ session }): Promise<IIterationDTO> {
        const triggerExit = Messenger.getValue('trigger.exit')
        await SessionProcessor.update({ 
            session, 
            type: SESSIONTYPE_FINISHED, 
            messages: [ triggerExit ] 
        })

        return {
            messages: [ triggerExit ]
        }
    }
}

export { FinishProvider }
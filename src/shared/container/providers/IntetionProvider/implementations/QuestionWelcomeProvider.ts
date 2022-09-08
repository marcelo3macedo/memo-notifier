import { IIntetionProvider } from "../IIntetionProvider";
import IIterationDTO from "@modules/iterations/dtos/IIterationDTO";

class QuestionWelcomeProvider implements IIntetionProvider {
    async process({ user, session, messages }): Promise<IIterationDTO> {
        return
    }
    
    async makeMessage({ user, session, sessionsAPI, messages }): Promise<IIterationDTO> {
        return
    }
}

export { QuestionWelcomeProvider };
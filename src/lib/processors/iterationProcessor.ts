import { ITERATION_EXIT, ITERATION_MENU, ITERATION_QUESTION_WELCOME, ITERATION_WELCOME } from "@constants/iteration"
import Iteration from "@lib/iteration"
import { IIntetionProvider } from "@shared/container/providers/IntetionProvider/IIntetionProvider"
import { inject, injectable } from "tsyringe"
import SessionProcessor from "./sessionProcessor"
import User from "./user"

@injectable()
class IterationProcessor {
    constructor(
        @inject("WelcomeProvider")
        private welcomeProvider: IIntetionProvider,
        @inject("QuestionWelcomeProvider")
        private questionWelcomeProvider: IIntetionProvider,
        @inject("ExitProvider")
        private exitProvider: IIntetionProvider,
    ) {}

    async handle({ channelType, userId, message }) {
        const user = await User.retrieve({ channelType, userId })
        const session = await SessionProcessor.retrieve({ userId: user.id })
        const intetion = this.getIntetion({ session, message })        
        if (!intetion) {
            return
        }

        const messages = await intetion.process({ user, session, message })        
        return {
            key: user.key,
            messages
        }
    }

    getIntetion({ session, message }) {
        const iteration = Iteration.getProvider({ session, message})
        switch (iteration) {
            case ITERATION_WELCOME: return this.welcomeProvider;
            case ITERATION_QUESTION_WELCOME: return this.questionWelcomeProvider;
            case ITERATION_MENU: return this.welcomeProvider;
            case ITERATION_EXIT: return this.exitProvider;
        }        
    }
}

export default IterationProcessor
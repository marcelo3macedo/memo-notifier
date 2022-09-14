import { ITERATION_AUTH_VALIDATION, ITERATION_EXIT, ITERATION_FINISHED, ITERATION_MENU, ITERATION_QUESTION, ITERATION_QUESTION_WELCOME, ITERATION_WELCOME } from "@constants/iteration"
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
        @inject("QuestionProvider")
        private questionProvider: IIntetionProvider,
        @inject("ExitProvider")
        private exitProvider: IIntetionProvider,
        @inject("FinishProvider")
        private finishProvider: IIntetionProvider,
        @inject("AuthProvider")
        private authProvider: IIntetionProvider,
        @inject("ValidationProvider")
        private validationProvider: IIntetionProvider,
    ) {}

    async handle({ channelType, userId, message }) {
        const user = await User.retrieve({ channelType, userId })
        const session = await SessionProcessor.retrieve({ userId: user.id })
        const intetion = this.getIntetion({ session, message, user })        
        if (!intetion) {
            return
        }
        
        const { messages, options } = await intetion.process({ user, session, message }) || {}   
        return {
            key: user.key,
            messages,
            options
        }
    }

    getIntetion({ session, message, user }) {
        const iteration = Iteration.getProvider({ session, message })
        
        if (!user.externalId) {
            return iteration == ITERATION_AUTH_VALIDATION ? 
                this.validationProvider : 
                this.authProvider
        }

        switch (iteration) {
            case ITERATION_WELCOME: return this.welcomeProvider;
            case ITERATION_QUESTION_WELCOME: return this.questionWelcomeProvider;
            case ITERATION_MENU: return this.welcomeProvider;
            case ITERATION_EXIT: return this.exitProvider;
            case ITERATION_QUESTION: return this.questionProvider;
            case ITERATION_FINISHED: return this.finishProvider;
        }        
    }
}

export default IterationProcessor
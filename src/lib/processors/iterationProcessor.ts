import { IIntetionProvider } from "@shared/container/providers/IntetionProvider/IIntetionProvider"
import { inject, injectable } from "tsyringe"
import SessionProcessor from "./sessionProcessor"
import User from "./user"

@injectable()
class IterationProcessor {
    constructor(
        @inject("WelcomeProvider")
        private welcomeProvider: IIntetionProvider,
    ) {}

    async handle({ channelType, userId, message }) {
        const user = await User.retrieve({ channelType, userId })
        const session = await SessionProcessor.retrieve({ userId: user.id })
        const intetion = this.getIntetion({ session })
        const messages = await intetion.process({ user, session, message })
        
        return {
            key: user.key,
            messages
        }
    }

    getIntetion({ session }) {
        if (!session || session.iterations.length == 0) {
            return this.welcomeProvider
        }
    }
}

export default IterationProcessor
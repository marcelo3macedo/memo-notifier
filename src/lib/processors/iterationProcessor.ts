import { IIntetionProvider } from "@shared/container/providers/IntetionProvider/IIntetionProvider"
import { inject, injectable } from "tsyringe"
import Session from "./session"
import User from "./user"

@injectable()
class IterationProcessor {
    constructor(
        @inject("WelcomeProvider")
        private welcomeProvider: IIntetionProvider,
    ) {}

    async handle({ channelType, userId, message }) {
        const user = await User.retrieve({ channelType, userId })
        const session = await Session.retrieve({ userId: user.id })
        const intetion = this.getIntetion({ session, user })
        const messages = await intetion.process({ user, message })
        
        return {
            key: user.key,
            messages
        }
    }

    getIntetion({ session, user }) {
        if (!session || session.iterations.length == 0) {
            return this.welcomeProvider
        }
    }
}

export default IterationProcessor
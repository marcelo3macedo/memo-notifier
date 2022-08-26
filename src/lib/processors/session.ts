import CreateSessionUseCases from "@modules/sessions/useCases/createSession/CreateSessionUseCases";
import IndexSessionUseCases from "@modules/sessions/useCases/indexSession/IndexSessionUseCases";
import { container } from "tsyringe";

class Session {
    static async retrieve({ userId }) {
        const indexSessionUseCases = container.resolve(IndexSessionUseCases)
        const createSessionUseCases = container.resolve(CreateSessionUseCases)

        const session = await indexSessionUseCases.execute({
            userId
        })

        if (session) {
            return session
        }

        await createSessionUseCases.execute({ userId })

        return indexSessionUseCases.execute({
            userId
        })
    }
}

export default Session
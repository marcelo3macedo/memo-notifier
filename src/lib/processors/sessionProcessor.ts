import CreateIterationUseCases from "@modules/iterations/useCases/createIteration/CreateIterationUseCases";
import CreateSessionUseCases from "@modules/sessions/useCases/createSession/CreateSessionUseCases";
import IndexSessionUseCases from "@modules/sessions/useCases/indexSession/IndexSessionUseCases";
import RemoveSessionUseCases from "@modules/sessions/useCases/removeSession/RemoveSessionUseCases";
import { container } from "tsyringe";

class SessionProcessor {
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

    static async update({ session, type, messages }) {
        const createIterationUseCases = container.resolve(CreateIterationUseCases)
        const removeSessionUseCases = container.resolve(RemoveSessionUseCases)

        messages.map(async (m, i) => {
            await createIterationUseCases.execute({ 
                sessionId: session.id,
                content: m,
                position: i,
                type   
            })
        })

        await removeSessionUseCases.execute({ id: session.id })
    }
}

export default SessionProcessor
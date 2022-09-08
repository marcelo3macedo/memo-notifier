import { SESSIONTYPE_FINISHED } from "@constants/sessionType";
import CreateIterationUseCases from "@modules/iterations/useCases/createIteration/CreateIterationUseCases";
import CreateIterationOptionUseCases from "@modules/iterations/useCases/createIterationOption/CreateIterationOptionUseCases";
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

    static async update({ session, type, messages, options=[] }) {
        let iteration;
        const createIterationUseCases = container.resolve(CreateIterationUseCases)
        const removeSessionUseCases = container.resolve(RemoveSessionUseCases)
        const createIterationOptionUseCases = container.resolve(CreateIterationOptionUseCases)
        
        await Promise.all(messages.map(async (m, i) => {
            iteration = await createIterationUseCases.execute({ 
                sessionId: session.id,
                content: m,
                position: i,
                type   
            })
        }))

        options.forEach(async (o, i) => {
            await createIterationOptionUseCases.execute({
                content: o.content,
                slug: o.slug,
                iterationId: iteration.id,
                position: i
            })
        })

        if (type === SESSIONTYPE_FINISHED) {
            await removeSessionUseCases.execute({ id: session.id })
        }
    }
}

export default SessionProcessor
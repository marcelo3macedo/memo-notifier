import { SESSIONTYPE_FINISHED } from "@constants/sessionType";
import CreateIterationUseCases from "@modules/iterations/useCases/createIteration/CreateIterationUseCases";
import CreateIterationOptionUseCases from "@modules/iterations/useCases/createIterationOption/CreateIterationOptionUseCases";
import CreateSessionUseCases from "@modules/sessions/useCases/createSession/CreateSessionUseCases";
import IndexSessionUseCases from "@modules/sessions/useCases/indexSession/IndexSessionUseCases";
import RemoveSessionUseCases from "@modules/sessions/useCases/removeSession/RemoveSessionUseCases";
import RemoveSessionAPIUseCases from "@modules/sessions/useCases/removeSessionAPI/RemoveSessionAPIUseCases";
import UpdateSessionUseCases from "@modules/sessions/useCases/updateSession/UpdateSessionUseCases";
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

        return createSessionUseCases.execute({ userId })
    }

    static async update({ session, type, messages, options=[] }) {
        let iteration;
        const createIterationUseCases = container.resolve(CreateIterationUseCases)
        const removeSessionUseCases = container.resolve(RemoveSessionUseCases)
        const removeSessionAPIUseCases = container.resolve(RemoveSessionAPIUseCases)
        const updateSessionUseCases = container.resolve(UpdateSessionUseCases)
        const createIterationOptionUseCases = container.resolve(CreateIterationOptionUseCases)

        if (type === SESSIONTYPE_FINISHED) {
            await removeSessionAPIUseCases.execute({ id: session.externalId })
            return removeSessionUseCases.execute({ id: session.id })
        }
        
        await Promise.all(messages.map(async (m, i) => {
            iteration = await createIterationUseCases.execute({ 
                sessionId: session.id,
                content: m,
                cardId: null,
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
        
        await updateSessionUseCases.execute({ id: session.id, nextId: iteration.id })
    }

    static async updateOptions({ session, type, messages, options=[], externalId=null }) {
        let iteration, firstIteration;
        const createIterationUseCases = container.resolve(CreateIterationUseCases)
        const createIterationOptionUseCases = container.resolve(CreateIterationOptionUseCases)
        const updateSessionUseCases = container.resolve(UpdateSessionUseCases)
        const removeSessionUseCases = container.resolve(RemoveSessionUseCases)
        
        await Promise.all(messages.map(async (m, i) => {
            iteration = await createIterationUseCases.execute({ 
                sessionId: session.id,
                cardId: m.cardId,
                content: m.message,
                position: i,
                type   
            })

            if (!firstIteration) firstIteration = iteration

            options.forEach(async (o, i) => {
                await createIterationOptionUseCases.execute({
                    content: o.content,
                    slug: o.slug,
                    iterationId: iteration.id,
                    position: i
                })
            })
        }))

        await updateSessionUseCases.execute({ id: session.id, nextId: firstIteration.id, externalId })

        if (type === SESSIONTYPE_FINISHED) {
            await removeSessionUseCases.execute({ id: session.id })
        }
    }

    static async updateIteration({ session, iteration }) {
        const updateSessionUseCases = container.resolve(UpdateSessionUseCases)
        await updateSessionUseCases.execute({ id: session.id, nextId: iteration.id })
    }
}

export default SessionProcessor
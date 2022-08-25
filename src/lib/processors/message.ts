import { container } from "tsyringe";

import CreateMessageUseCases from "@modules/messages/useCases/createMessage/CreateMessageUseCases";

class Message {
    static async save({ content, userId }) {
        const createMessageUseCases = container.resolve(CreateMessageUseCases)
        await createMessageUseCases.execute({
            message: content,
            userId
        })
    }
}

export default Message
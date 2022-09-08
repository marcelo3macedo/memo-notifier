import { container, injectable } from "tsyringe";

import IHandleMessageDTO from "@modules/webhook/dtos/IHandleMessageDTO";
import ChannelProcessor from "@lib/processors/channelProcessor";
import CreateMessageUseCases from "@modules/messages/useCases/createMessage/CreateMessageUseCases";
import IterationProcessor from "@lib/processors/iterationProcessor";

@injectable()
export default class HandleMessageUseCases {
    async execute({ channelType, requestData }:IHandleMessageDTO): Promise<void> {
        try {
            const channelProcessor = container.resolve(ChannelProcessor)
            const createMessageUseCases = container.resolve(CreateMessageUseCases)
            const iterationProcessor = container.resolve(IterationProcessor)

            const { content, userId } = channelProcessor.handleMessage({ channelType, requestData })
            await createMessageUseCases.execute({ message: content, userId })

            const { key, messages } = await iterationProcessor.handle({ channelType, userId, message: content })

            console.log(messages)
            //channelProcessor.sendMessage({ channelType, key, messages })
        } catch (e) {
            console.log(e)
        }
   }
}
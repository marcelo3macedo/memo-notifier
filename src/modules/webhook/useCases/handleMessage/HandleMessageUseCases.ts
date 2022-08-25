import { injectable } from "tsyringe";

import Channel from "lib/processors/channel";
import IHandleMessageDTO from "@modules/webhook/dtos/IHandleMessageDTO";
import Message from "@lib/processors/message";

@injectable()
export default class HandleMessageUseCases {
    async execute({ channelType, requestData }:IHandleMessageDTO): Promise<void> {
        const channel = Channel.getChannelByType(channelType)
        const message = channel.receive(requestData)

        return Message.process(message)
   }
}
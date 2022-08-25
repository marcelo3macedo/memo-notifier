import { inject, injectable } from "tsyringe";

import Channel from "lib/processors/channel";
import IHandleMessageDTO from "@modules/webhook/dtos/IHandleMessageDTO";
import IMessageRepository from "@modules/messages/repositories/IMessageRepository";

@injectable()
export default class HandleMessageUseCases {
    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ) {}

   async execute({ channelType, requestData }:IHandleMessageDTO): Promise<void> {
        const channel = Channel.getChannelByType(channelType)
        const message = channel.receive(requestData)

        await this.messageRepository.create({
            message: message.content,
            userId: message.userId
        })
   }
}
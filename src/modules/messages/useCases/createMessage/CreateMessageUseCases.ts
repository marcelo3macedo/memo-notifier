import { inject, injectable } from "tsyringe";

import IMessageRepository from "@modules/messages/repositories/IMessageRepository";
import ICreateMessageDTO from "@modules/messages/dtos/ICreateMessageDTO";

@injectable()
export default class CreateMessageUseCases {
    constructor(
        @inject("MessageRepository")
        private messageRepository: IMessageRepository
    ) {}

   async execute({ message, userId }:ICreateMessageDTO): Promise<void> {
        return this.messageRepository.create({
            message,
            userId
        })
   }
}
import { Repository } from "typeorm";
import { AppDataSource } from "@shared/infra/typeorm";

import ICreateMessageDTO from "@modules/messages/dtos/ICreateMessageDTO";
import { Message } from "@modules/messages/entities/Message";
import IMessageRepository from "@modules/messages/repositories/IMessageRepository";

class MessageRepository implements IMessageRepository {
    private repository: Repository<Message>;

   constructor() {
      this.repository = AppDataSource.getRepository(Message);
   }

   async create({ message, userId }:ICreateMessageDTO): Promise<void> {
    const messageCreated = this.repository.create({
        message,
        userId
     })

     await this.repository.save(messageCreated);
   }
}

export default MessageRepository;
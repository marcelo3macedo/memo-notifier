import ICreateMessageDTO from "@modules/messages/dtos/ICreateMessageDTO";

export default interface IMessageRepository {
    create(data: ICreateMessageDTO): Promise<void>;
}
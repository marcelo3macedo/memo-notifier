import IMessageDTO from "@modules/messages/dtos/IMessageDTO";

interface IIntetionProvider {
    process(data:any):void
    makeMessage(userId):IMessageDTO[]
}

export { IIntetionProvider };
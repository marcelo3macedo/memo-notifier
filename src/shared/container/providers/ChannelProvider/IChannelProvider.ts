import IMessageDTO from "@modules/messages/dtos/IMessageDTO";
import ISendChannelProvider from "./dtos/ISendChannelProvider";

interface IChannelProvider {
    receive(data:any):IMessageDTO
    send(data:ISendChannelProvider):void
    formatMessages(messages:any):string
}

export { IChannelProvider };
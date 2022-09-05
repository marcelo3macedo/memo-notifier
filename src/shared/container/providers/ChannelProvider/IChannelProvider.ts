import ISendChannelProvider from "./dtos/ISendChannelProvider";

interface IChannelProvider {
    send(data:ISendChannelProvider):void
    formatMessages(messages:any):string
}

export { IChannelProvider };
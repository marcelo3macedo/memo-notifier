import { inject, injectable } from "tsyringe"
import { CHANNEL_TELEGRAM } from "@constants/channels"
import IHandleChannelDTO from "@modules/channels/dtos/IHandleChannelDTO"
import { IChannelProvider } from "@shared/container/providers/ChannelProvider/IChannelProvider"

@injectable()
class ChannelProcessor {
    constructor(
        @inject("TelegramProvider")
        private telegramProvider: IChannelProvider,
    ) {}

    handleMessage({ channelType, requestData }:IHandleChannelDTO) {
        const channel = this.getChannelByType(channelType)
        return channel.receive(requestData)
    }

    sendMessage({ channelType, key, messages, options }) {
        const channel = this.getChannelByType(channelType)
        channel.send({ userId: key, messages, options })
    }

    getChannelByType(type) {
        return type == CHANNEL_TELEGRAM ? this.telegramProvider : null
    }
}

export default ChannelProcessor
import { CHANNEL_TELEGRAM } from "@constants/channels"
import { Telegram } from "@lib/channels/telegram"
import { Whatsapp } from "@lib/channels/whatsapp"

class Channel {
    static getChannelByType(type) {
        if (type === CHANNEL_TELEGRAM) {
            return new Telegram()
        }

        return new Whatsapp()
    }
}

export default Channel
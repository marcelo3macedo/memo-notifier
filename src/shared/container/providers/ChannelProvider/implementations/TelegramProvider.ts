import helper from "@config/helper";
import IMessageDTO from "@modules/messages/dtos/IMessageDTO";
import axios from "axios";
import { IChannelProvider } from "../IChannelProvider";

class TelegramProvider implements IChannelProvider {
    receive(data): IMessageDTO {
        const { message } = data || {}
        const { chat } = message || {}

        if (!message || !chat) {
            return
        }

        return {
            messageId: message.message_id,
            content: message.text,
            userId: chat.id
        }
    }
    
    async send({ userId, messages }) {
        if (!messages) {
            return
        }

        const options = {
            method: 'POST',
            url: helper.telegram.endpointWithToken,
            headers: {'Content-Type': 'application/json'},
            data: { chat_id: userId, text: this.formatMessages(messages) }
        }

        await axios.request(options)
    }

    formatMessages(messages) {
        return messages.reduce((p, a) => {
            return (p ? p + '\n\n' : p) + a.content
        }, '')
    }
}

export { TelegramProvider };
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
    
    async send({ userId, messages, options }) {
        if (!messages) {
            return
        }

        const optRequest = {
            method: 'POST',
            url: helper.telegram.endpointWithToken,
            headers: {'Content-Type': 'application/json'},
            data: { 
                chat_id: userId, 
                text: this.formatMessages(messages),
                reply_markup: this.formatOptions(options)
            }
        }

        await axios.request(optRequest)
    }

    formatMessages(messages) {
        return messages.reduce((p, a) => {
            return (p ? p + '\n\n' : p) + a
        }, '')
    }

    formatOptions(options) {
        if (!options) {
            return
        }
        
        const result = options.map(o => {
            return {
                text: o.content,
                callback_data: o.slug
            }
        })

        return {
            inline_keyboard: [
                result
            ]
        }
    }
}

export { TelegramProvider };
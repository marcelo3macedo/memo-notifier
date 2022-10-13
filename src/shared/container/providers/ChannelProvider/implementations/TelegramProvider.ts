import helper from "@config/helper";
import IMessageDTO from "@modules/messages/dtos/IMessageDTO";
import axios from "axios";
import { IChannelProvider } from "@shared/container/providers/ChannelProvider/IChannelProvider";

class TelegramProvider implements IChannelProvider {
    receive(data): IMessageDTO {
        const { message, callback_query } = data || {}
        const { chat } = message || {}

        if (callback_query) {
            return {
                messageId: callback_query.id,
                content: callback_query.data,
                userId: callback_query.message.chat.id,
                userName: ''
            }
        }

        if (!message || !chat) {
            return
        }

        return {
            messageId: message.message_id,
            content: message.text,
            userId: chat.id,
            userName: chat.first_name
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
                callback_data: o.slug,
                url: o.url
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
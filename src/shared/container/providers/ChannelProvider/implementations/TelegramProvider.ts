import helper from "@config/helper";
import axios from "axios";
import { IChannelProvider } from "../IChannelProvider";

class TelegramProvider implements IChannelProvider {
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
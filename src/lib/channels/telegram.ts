import IMessageDTO from "@modules/messages/dtos/IMessageDTO"
import { Channel } from "./channel"

export class Telegram extends Channel {
    receive(request):IMessageDTO  {
        const { message } = request || {}
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
    
    send() {
        return 2
    }
}
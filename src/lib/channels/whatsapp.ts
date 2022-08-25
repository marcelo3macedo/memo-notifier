import IMessageDTO from "@modules/messages/dtos/IMessageDTO"
import { Channel } from "./channel"

export class Whatsapp extends Channel {
    receive(request):IMessageDTO {
        return
    }   
    
    send() {
        return 2
    }
}
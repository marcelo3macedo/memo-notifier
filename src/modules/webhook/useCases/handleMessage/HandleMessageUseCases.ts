import { injectable } from "tsyringe";

import IHandleMessageDTO from "@modules/webhook/dtos/IHandleMessageDTO";
import Channel from "lib/processors/channel";
import Message from "@lib/processors/message";
import User from "@lib/processors/user";
import Session from "@lib/processors/session";
import Iteration from "@lib/processors/iteration";

@injectable()
export default class HandleMessageUseCases {
    async execute({ channelType, requestData }:IHandleMessageDTO): Promise<void> {
        const channel = Channel.getChannelByType(channelType)
        const message = channel.receive(requestData)
        const user = await User.retrieve({ channelType, userId: message.userId })
        const session = await Session.retrieve({ userId: user.id })

        await Message.save(message)
        await Iteration.handle({ session, user, message: message.content })
   }
}
import ChannelProcessor from "@lib/processors/channelProcessor"
import { container } from "tsyringe"

class Notify {
    static send ({ channelType, key, messages, options }) {
        const channelProcessor = container.resolve(ChannelProcessor)
        channelProcessor.sendMessage({ channelType, key, messages, options })
  };
}

export default Notify
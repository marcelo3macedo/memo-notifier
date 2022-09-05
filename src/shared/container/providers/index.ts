import { container } from "tsyringe";

import { IChannelProvider } from "./ChannelProvider/IChannelProvider";
import { TelegramProvider } from "./ChannelProvider/implementations/TelegramProvider";

container.registerSingleton<IChannelProvider>(
    "TelegramProvider",
    TelegramProvider
);
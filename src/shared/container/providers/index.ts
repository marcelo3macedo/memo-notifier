import { container } from "tsyringe";

import { IChannelProvider } from "./ChannelProvider/IChannelProvider";
import { TelegramProvider } from "./ChannelProvider/implementations/TelegramProvider";

import { IIntetionProvider } from "./IntetionProvider/IIntetionProvider";
import { WelcomeProvider } from "./IntetionProvider/implementations/WelcomeProvider";

container.registerSingleton<IChannelProvider>(
    "TelegramProvider",
    TelegramProvider
);

container.registerSingleton<IIntetionProvider>(
    "WelcomeProvider",
    WelcomeProvider
);
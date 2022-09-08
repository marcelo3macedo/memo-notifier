import { container } from "tsyringe";

import { IChannelProvider } from "./ChannelProvider/IChannelProvider";
import { TelegramProvider } from "./ChannelProvider/implementations/TelegramProvider";

import { IIntetionProvider } from "./IntetionProvider/IIntetionProvider";
import { ExitProvider } from "./IntetionProvider/implementations/ExitProvider";
import { QuestionWelcomeProvider } from "./IntetionProvider/implementations/QuestionWelcomeProvider";
import { WelcomeProvider } from "./IntetionProvider/implementations/WelcomeProvider";

container.registerSingleton<IChannelProvider>(
    "TelegramProvider",
    TelegramProvider
);

container.registerSingleton<IIntetionProvider>(
    "WelcomeProvider",
    WelcomeProvider
);

container.registerSingleton<IIntetionProvider>(
    "ExitProvider",
    ExitProvider
);

container.registerSingleton<IIntetionProvider>(
    "QuestionWelcomeProvider",
    QuestionWelcomeProvider
);
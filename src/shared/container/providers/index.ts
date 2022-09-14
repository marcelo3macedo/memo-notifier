import { container } from "tsyringe";

import { IChannelProvider } from "./ChannelProvider/IChannelProvider";
import { TelegramProvider } from "./ChannelProvider/implementations/TelegramProvider";

import { IIntetionProvider } from "./IntetionProvider/IIntetionProvider";
import { AuthProvider } from "./IntetionProvider/implementations/AuthProvider";
import { ExitProvider } from "./IntetionProvider/implementations/ExitProvider";
import { FinishProvider } from "./IntetionProvider/implementations/FinishProvider";
import { QuestionProvider } from "./IntetionProvider/implementations/QuestionProvider";
import { QuestionWelcomeProvider } from "./IntetionProvider/implementations/QuestionWelcomeProvider";
import { ValidationProvider } from "./IntetionProvider/implementations/ValidationProvider";
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
    "FinishProvider",
    FinishProvider
);

container.registerSingleton<IIntetionProvider>(
    "QuestionWelcomeProvider",
    QuestionWelcomeProvider
);

container.registerSingleton<IIntetionProvider>(
    "QuestionProvider",
    QuestionProvider
);

container.registerSingleton<IIntetionProvider>(
    "AuthProvider",
    AuthProvider
);

container.registerSingleton<IIntetionProvider>(
    "ValidationProvider",
    ValidationProvider
);
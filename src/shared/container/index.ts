import { container } from 'tsyringe';

import IMessageRepository from '@modules/messages/repositories/IMessageRepository';
import MessageRepository from '@modules/messages/repositories/implementations/MessageRepository';

container.registerSingleton<IMessageRepository>('MessageRepository', MessageRepository);
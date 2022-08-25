import { container } from 'tsyringe';

import IMessageRepository from '@modules/messages/repositories/IMessageRepository';
import MessageRepository from '@modules/messages/repositories/implementations/MessageRepository';
import UserRepository from '@modules/users/repositories/implementations/UserRepository';
import IUserRepository from '@modules/users/repositories/IUserRepository';

container.registerSingleton<IMessageRepository>('MessageRepository', MessageRepository);
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
import { container } from 'tsyringe';

import IMessageRepository from '@modules/messages/repositories/IMessageRepository';
import MessageRepository from '@modules/messages/repositories/implementations/MessageRepository';
import UserRepository from '@modules/users/repositories/implementations/UserRepository';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import { SessionRepository } from '@modules/sessions/repositories/implementations/SessionRepository';
import ISessionRepository from '@modules/sessions/repositories/ISessionRepository';

container.registerSingleton<IMessageRepository>('MessageRepository', MessageRepository);
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<ISessionRepository>('SessionRepository', SessionRepository);
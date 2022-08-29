import { container } from 'tsyringe';

import IMessageRepository from '@modules/messages/repositories/IMessageRepository';
import MessageRepository from '@modules/messages/repositories/implementations/MessageRepository';
import UserRepository from '@modules/users/repositories/implementations/UserRepository';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import { SessionRepository } from '@modules/sessions/repositories/implementations/SessionRepository';
import ISessionRepository from '@modules/sessions/repositories/ISessionRepository';
import IUserAPIRepository from '@modules/users/repositories/IUserAPIRepository';
import UserAPIRepository from '@modules/users/repositories/implementations/UserAPIRepository';

container.registerSingleton<IMessageRepository>('MessageRepository', MessageRepository);
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IUserAPIRepository>('UserAPIRepository', UserAPIRepository);
container.registerSingleton<ISessionRepository>('SessionRepository', SessionRepository);
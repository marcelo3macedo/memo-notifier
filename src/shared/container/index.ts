import { container } from 'tsyringe';
import './providers';

import IMessageRepository from '@modules/messages/repositories/IMessageRepository';
import MessageRepository from '@modules/messages/repositories/implementations/MessageRepository';
import UserRepository from '@modules/users/repositories/implementations/UserRepository';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import { SessionRepository } from '@modules/sessions/repositories/implementations/SessionRepository';
import ISessionRepository from '@modules/sessions/repositories/ISessionRepository';
import IUserAPIRepository from '@modules/users/repositories/IUserAPIRepository';
import UserAPIRepository from '@modules/users/repositories/implementations/UserAPIRepository';
import ISessionAPIRepository from '@modules/sessions/repositories/ISessionAPIRepository';
import { SessionAPIRepository } from '@modules/sessions/repositories/implementations/SessionAPIRepository';
import { IterationRepository } from '@modules/iterations/repositories/implementations/IterationRepository';
import IIterationRepository from '@modules/iterations/repositories/IIterationRepository';
import { IterationOptionRepository } from '@modules/iterations/repositories/implementations/IterationOptionRepository';
import IIterationOptionRepository from '@modules/iterations/repositories/IIterationOptionRepository';

container.registerSingleton<IMessageRepository>('MessageRepository', MessageRepository);
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IUserAPIRepository>('UserAPIRepository', UserAPIRepository);
container.registerSingleton<ISessionRepository>('SessionRepository', SessionRepository);
container.registerSingleton<ISessionAPIRepository>('SessionAPIRepository', SessionAPIRepository);
container.registerSingleton<IIterationRepository>('IterationRepository', IterationRepository);
container.registerSingleton<IIterationOptionRepository>('IterationOptionRepository', IterationOptionRepository);

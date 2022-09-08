import { inject, injectable } from "tsyringe";

import ISessionRepository from "@modules/sessions/repositories/ISessionRepository";
import ICreateSessionDTO from "@modules/sessions/dtos/ICreateSessionDTO";
import { Session } from "@modules/sessions/entities/Session";

@injectable()
export default class CreateSessionUseCases {
    constructor(
        @inject("SessionRepository")
        private sessionRepository: ISessionRepository
    ) {}

    async execute({ userId }:ICreateSessionDTO): Promise<Session> {
        return this.sessionRepository.create({ userId })
   }
}
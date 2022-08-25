import { inject, injectable } from "tsyringe";

import IIndexSessionDTO from "@modules/sessions/dtos/IIndexSessionDTO";
import { Session } from "@modules/sessions/entities/Session";
import ISessionRepository from "@modules/sessions/repositories/ISessionRepository";

@injectable()
export default class IndexSessionUseCases {
    constructor(
        @inject("SessionRepository")
        private sessionRepository: ISessionRepository
    ) {}

    async execute({ userId }:IIndexSessionDTO): Promise<Session> {
        return this.sessionRepository.index({ userId })
   }
}
import { inject, injectable } from "tsyringe";

import ISessionRepository from "@modules/sessions/repositories/ISessionRepository";
import IRemoveSessionDTO from "@modules/sessions/dtos/IRemoveSessionDTO";

@injectable()
export default class RemoveSessionUseCases {
    constructor(
        @inject("SessionRepository")
        private sessionRepository: ISessionRepository
    ) {}

    async execute({ id }:IRemoveSessionDTO): Promise<void> {
        this.sessionRepository.remove({ id })
   }
}
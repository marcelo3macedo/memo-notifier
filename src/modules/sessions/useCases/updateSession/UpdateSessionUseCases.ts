import { inject, injectable } from "tsyringe";

import ISessionRepository from "@modules/sessions/repositories/ISessionRepository";
import IUpdateSessionDTO from "@modules/sessions/dtos/IUpdateSessionDTO";

@injectable()
export default class UpdateSessionUseCases {
    constructor(
        @inject("SessionRepository")
        private sessionRepository: ISessionRepository
    ) {}

    async execute({ id, nextId }:IUpdateSessionDTO): Promise<void> {
        this.sessionRepository.update({ id, nextId })
   }
}
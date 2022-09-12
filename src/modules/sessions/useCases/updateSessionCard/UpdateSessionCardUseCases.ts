import { inject, injectable } from "tsyringe";

import ISessionCardAPIRepository from "@modules/sessions/repositories/ISessionCardAPIRepository";
import IUpdateSessionCardAPIDTO from "@modules/sessions/dtos/IUpdateSessionCardAPIDTO";

@injectable()
export default class UpdateSessionCardUseCases {
    constructor(
        @inject("SessionCardAPIRepository")
        private sessionCardAPIRepository: ISessionCardAPIRepository
    ) {}

    async execute({ cardsId, difficultyId, sessionsId }:IUpdateSessionCardAPIDTO): Promise<void> {
        this.sessionCardAPIRepository.update({ cardsId, difficultyId, sessionsId })
   }
}
import { inject, injectable } from "tsyringe";

import ISessionAPIRepository from "@modules/sessions/repositories/ISessionAPIRepository";
import { SessionAPI } from "@modules/sessions/entities/SessionAPI";
import IIndexSessionAPIDTO from "@modules/sessions/dtos/IIndexSessionAPIDTO";

@injectable()
export default class IndexSessionAPIUseCases {
    constructor(
        @inject("SessionAPIRepository")
        private sessionAPIRepository: ISessionAPIRepository
    ) {}

    async execute({ id }:IIndexSessionAPIDTO): Promise<SessionAPI> {
        return this.sessionAPIRepository.index({ id })
   }
}
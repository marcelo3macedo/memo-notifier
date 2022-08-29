import { inject, injectable } from "tsyringe";

import ISessionAPIRepository from "@modules/sessions/repositories/ISessionAPIRepository";
import IListSessionAPIDTO from "@modules/sessions/dtos/IListSessionAPIDTO";
import { SessionAPI } from "@modules/sessions/entities/SessionAPI";

@injectable()
export default class ListSessionAPIUseCases {
    constructor(
        @inject("SessionAPIRepository")
        private sessionAPIRepository: ISessionAPIRepository
    ) {}

    async execute({ userId }:IListSessionAPIDTO): Promise<SessionAPI[]> {
        return this.sessionAPIRepository.list({ userId })
   }
}
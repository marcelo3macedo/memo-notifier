import { inject, injectable } from "tsyringe";

import ISessionAPIRepository from "@modules/sessions/repositories/ISessionAPIRepository";
import IRemoveSessionAPIDTO from "@modules/sessions/dtos/IRemoveSessionAPIDTO";

@injectable()
export default class RemoveSessionAPIUseCases {
    constructor(
        @inject("SessionAPIRepository")
        private sessionAPIRepository: ISessionAPIRepository
    ) {}

    async execute({ id }:IRemoveSessionAPIDTO): Promise<void> {
        return this.sessionAPIRepository.remove({ id })
   }
}
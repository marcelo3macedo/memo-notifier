import { inject, injectable } from "tsyringe";

import IIterationRepository from "@modules/iterations/repositories/IIterationRepository";
import ICreateIterationDTO from "@modules/iterations/dtos/ICreateIterationDTO";

@injectable()
export default class CreateIterationUseCases {
    constructor(
        @inject("IterationRepository")
        private iterationRepository: IIterationRepository
    ) {}

    async execute({ sessionId, content, position, type }:ICreateIterationDTO): Promise<void> {
        this.iterationRepository.create({ sessionId, content, position, type })
   }
}
import { inject, injectable } from "tsyringe";

import IIterationRepository from "@modules/iterations/repositories/IIterationRepository";
import ICreateIterationDTO from "@modules/iterations/dtos/ICreateIterationDTO";
import { Iteration } from "@modules/iterations/entities/Iteration";

@injectable()
export default class CreateIterationUseCases {
    constructor(
        @inject("IterationRepository")
        private iterationRepository: IIterationRepository
    ) {}

    async execute({ sessionId, cardId, content, position, type }:ICreateIterationDTO): Promise<Iteration> {
        return this.iterationRepository.create({ sessionId, cardId, content, position, type })
   }
}
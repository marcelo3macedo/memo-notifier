import { inject, injectable } from "tsyringe";

import IIterationOptionRepository from "@modules/iterations/repositories/IIterationOptionRepository";
import ICreateIterationOptionDTO from "@modules/iterations/dtos/ICreateIterationOptionDTO";

@injectable()
export default class CreateIterationOptionUseCases {
    constructor(
        @inject("IterationOptionRepository")
        private iterationOptionRepository: IIterationOptionRepository
    ) {}

    async execute({ slug, content, iterationId, position }:ICreateIterationOptionDTO): Promise<void> {
        return this.iterationOptionRepository.create({ slug, content, iterationId, position })
   }
}
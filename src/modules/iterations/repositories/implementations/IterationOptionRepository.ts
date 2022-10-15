import { Repository } from "typeorm";
import { AppDataSource } from "@shared/infra/typeorm";

import IIterationOptionRepository from "@modules/iterations/repositories/IIterationOptionRepository";
import ICreateIterationOptionDTO from "@modules/iterations/dtos/ICreateIterationOptionDTO";
import { IterationOption } from "@modules/iterations/entities/IterationOption";

export class IterationOptionRepository implements IIterationOptionRepository {
    private repository: Repository<IterationOption>;

    constructor() {
        this.repository = AppDataSource.getRepository(IterationOption);
    }

    async create({ iterationId, slug, content, position }:ICreateIterationOptionDTO): Promise<void> {
        const iterationOptionCreated = this.repository.create({
            slug, content, iterationId, position
        })
    
        await this.repository.save(iterationOptionCreated)
    }
}
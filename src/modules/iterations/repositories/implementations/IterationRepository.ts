import { Repository } from "typeorm";
import { AppDataSource } from "@shared/infra/typeorm";

import { Iteration } from "@modules/iterations/entities/Iteration";
import IIterationRepository from "@modules/iterations/repositories/IIterationRepository";
import ICreateIterationDTO from "@modules/iterations/dtos/ICreateIterationDTO";

export class IterationRepository implements IIterationRepository {
    private repository: Repository<Iteration>;

    constructor() {
        this.repository = AppDataSource.getRepository(Iteration);
    }

    async create({ sessionId, cardId, content, position, type }:ICreateIterationDTO): Promise<Iteration> {
        const iterationCreated = this.repository.create({
            sessionId, cardId, content, position, type
        })
    
        await this.repository.save(iterationCreated)

        return iterationCreated
    }
}
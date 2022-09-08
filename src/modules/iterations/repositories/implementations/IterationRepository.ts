import { Iteration } from "@modules/iterations/entities/Iteration";
import { getRepository, Repository } from "typeorm";
import IIterationRepository from "../IIterationRepository";
import ICreateIterationDTO from "@modules/iterations/dtos/ICreateIterationDTO";

export class IterationRepository implements IIterationRepository {
    private repository: Repository<Iteration>;

    constructor() {
        this.repository = getRepository(Iteration);
    }

    async create({ sessionId, content, position, type }:ICreateIterationDTO): Promise<Iteration> {
        const iterationCreated = this.repository.create({
            sessionId, content, position, type
        })
    
        await this.repository.save(iterationCreated)

        return iterationCreated
    }
}
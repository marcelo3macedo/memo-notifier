import { getRepository, Repository } from "typeorm";
import { ApiDataSource } from "@shared/infra/typeorm";

import { SessionAPI } from "@modules/sessions/entities/SessionAPI";
import IListSessionAPIDTO from "@modules/sessions/dtos/IListSessionAPIDTO";
import ISessionAPIRepository from "@modules/sessions/repositories/ISessionAPIRepository";
import IIndexSessionAPIDTO from "@modules/sessions/dtos/IIndexSessionAPIDTO";

export class SessionAPIRepository implements ISessionAPIRepository {
    private repository: Repository<SessionAPI>;

    constructor() {
        this.repository = ApiDataSource.getRepository(SessionAPI);
    }

    async list({ userId }:IListSessionAPIDTO): Promise<SessionAPI[]> {
        return this.repository.createQueryBuilder('sessions')
            .leftJoinAndSelect('sessions.deck', 'deck')
            .where({ userId })
            .getMany()
    }

    async index({ id }:IIndexSessionAPIDTO): Promise<SessionAPI> {
        return this.repository.createQueryBuilder('sessions')
            .leftJoinAndSelect('sessions.deck', 'deck')
            .leftJoinAndSelect('sessions.cards', 'cards')
            .where({ id })
            .getOne()
    }

    async remove({ id }): Promise<void> {
        this.repository.softDelete({ id });
    }
}
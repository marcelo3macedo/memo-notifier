import { getRepository, Repository } from "typeorm";

import { DATABASE_API } from "@constants/databases";
import { SessionAPI } from "@modules/sessions/entities/SessionAPI";
import IListSessionAPIDTO from "@modules/sessions/dtos/IListSessionAPIDTO";
import ISessionAPIRepository from "@modules/sessions/repositories/ISessionAPIRepository";
import IIndexSessionAPIDTO from "@modules/sessions/dtos/IIndexSessionAPIDTO";

export class SessionAPIRepository implements ISessionAPIRepository {
    private repository: Repository<SessionAPI>;

    constructor() {
        this.repository = getRepository(SessionAPI, DATABASE_API);
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
}
import { getRepository, Repository } from "typeorm";

import { Session } from "@modules/sessions/entities/Session";
import ICreateSessionDTO from "@modules/sessions/dtos/ICreateSessionDTO";
import IIndexSessionDTO from "@modules/sessions/dtos/IIndexSessionDTO";
import IRemoveSessionDTO from "@modules/sessions/dtos/IRemoveSessionDTO";
import ISessionRepository from "@modules/sessions/repositories/ISessionRepository";
import IUpdateSessionDTO from "@modules/sessions/dtos/IUpdateSessionDTO";

export class SessionRepository implements ISessionRepository {
    private repository: Repository<Session>;

    constructor() {
        this.repository = getRepository(Session);
    }

    async index({ userId }:IIndexSessionDTO): Promise<Session> {
        return this.repository.createQueryBuilder('sessions')
            .leftJoinAndSelect("sessions.iterations", "iterations")
            .where({ userId })
            .getOne()
    }

    async create({ userId }:ICreateSessionDTO): Promise<Session> {
        const sessionCreated = this.repository.create({
            userId
        })
    
        await this.repository.save(sessionCreated)
        return sessionCreated
    }

    async remove({ id }:IRemoveSessionDTO): Promise<void> {
        await this.repository.softDelete(id);
    }

    async update({ id, nextId }:IUpdateSessionDTO): Promise<void> {
        const session = {
            nextId
        }
     
        this.repository.update({ id }, session)
    }
}
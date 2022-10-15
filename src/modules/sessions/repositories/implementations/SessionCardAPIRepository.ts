import { Repository } from "typeorm";
import { ApiDataSource } from "@shared/infra/typeorm";

import { SessionCardAPI } from "@modules/sessions/entities/SessionCardAPI";
import IUpdateSessionCardAPIDTO from "@modules/sessions/dtos/IUpdateSessionCardAPIDTO";
import ISessionCardAPIRepository from "@modules/sessions/repositories/ISessionCardAPIRepository";

export class SessionCardAPIRepository implements ISessionCardAPIRepository {
    private repository: Repository<SessionCardAPI>;

    constructor() {
        this.repository = ApiDataSource.getRepository(SessionCardAPI);
    }

    async update({ sessionsId, cardsId, difficultyId }:IUpdateSessionCardAPIDTO): Promise<void> {
        const sessionCard = {
            difficultyId
        }
     
        this.repository.update({ sessionsId, cardsId }, sessionCard)
    }
}
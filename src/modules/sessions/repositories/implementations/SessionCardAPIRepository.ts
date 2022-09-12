import { getRepository, Repository } from "typeorm";

import { DATABASE_API } from "@constants/databases";
import { SessionCardAPI } from "@modules/sessions/entities/SessionCardAPI";
import IUpdateSessionCardAPIDTO from "@modules/sessions/dtos/IUpdateSessionCardAPIDTO";
import ISessionCardAPIRepository from "../ISessionCardAPIRepository";

export class SessionCardAPIRepository implements ISessionCardAPIRepository {
    private repository: Repository<SessionCardAPI>;

    constructor() {
        this.repository = getRepository(SessionCardAPI, DATABASE_API);
    }

    async update({ sessionsId, cardsId, difficultyId }:IUpdateSessionCardAPIDTO): Promise<void> {
        const sessionCard = {
            difficultyId
        }
     
        this.repository.update({ sessionsId, cardsId }, sessionCard)
    }
}
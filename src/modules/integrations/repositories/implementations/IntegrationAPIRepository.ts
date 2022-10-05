import { getRepository, Repository } from "typeorm";

import IIntegrationAPIRepository from "../IIntegrationAPIRepository";
import { DATABASE_API } from "@constants/databases";
import ICreateIntegrationAPIDTO from "@modules/integrations/dtos/ICreateIntegrationAPIDTO";
import { IntegrationAPI } from "@modules/integrations/entities/IntegrationAPI";
import IIndexIntegrationAPIDTO from "@modules/integrations/dtos/IIndexIntegrationAPIDTO";

class IntegrationAPIRepository implements IIntegrationAPIRepository {
   private repository: Repository<IntegrationAPI>;

   constructor() {
      this.repository = getRepository(IntegrationAPI, DATABASE_API);
   }

   async index({ typeId, externalId }:IIndexIntegrationAPIDTO): Promise<IntegrationAPI> {
      return this.repository.createQueryBuilder()
         .where({ typeId, externalId })
         .getOne()
   }

   async create({ typeId, externalId, externalName }:ICreateIntegrationAPIDTO): Promise<void> {
      const integration = this.repository.create({
         typeId,
         externalId,
         externalName
      })

      await this.repository.save(integration)
   }
}

export default IntegrationAPIRepository;
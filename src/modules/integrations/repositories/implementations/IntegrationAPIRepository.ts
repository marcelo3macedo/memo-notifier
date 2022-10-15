import { Repository } from "typeorm";
import { ApiDataSource } from "@shared/infra/typeorm";

import IIntegrationAPIRepository from "@modules/integrations/repositories/IIntegrationAPIRepository";
import ICreateIntegrationAPIDTO from "@modules/integrations/dtos/ICreateIntegrationAPIDTO";
import { IntegrationAPI } from "@modules/integrations/entities/IntegrationAPI";
import IIndexIntegrationAPIDTO from "@modules/integrations/dtos/IIndexIntegrationAPIDTO";

class IntegrationAPIRepository implements IIntegrationAPIRepository {
   private repository: Repository<IntegrationAPI>;

   constructor() {
      this.repository = ApiDataSource.getRepository(IntegrationAPI);
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
import { Repository } from "typeorm";
import { ApiDataSource } from "@shared/infra/typeorm";

import IIntegrationTypeAPIRepository from "@modules/integrations/repositories/IIntegrationTypeAPIRepository";
import IIndexIntegrationTypeAPIDTO from "@modules/integrations/dtos/IIndexIntegrationTypeAPIDTO";
import { IntegrationTypeAPI } from "@modules/integrations/entities/IntegrationTypeAPI";

class IntegrationTypeAPIRepository implements IIntegrationTypeAPIRepository {
   private repository: Repository<IntegrationTypeAPI>;

   constructor() {
      this.repository = ApiDataSource.getRepository(IntegrationTypeAPI);
   }

   async index({ name }:IIndexIntegrationTypeAPIDTO): Promise<IntegrationTypeAPI> {
      return this.repository.createQueryBuilder()
         .where({ name })
         .getOne()
   }
}

export default IntegrationTypeAPIRepository;
import { getRepository, Repository } from "typeorm";

import { DATABASE_API } from "@constants/databases";
import IIntegrationTypeAPIRepository from "@modules/integrations/repositories/IIntegrationTypeAPIRepository";
import IIndexIntegrationTypeAPIDTO from "@modules/integrations/dtos/IIndexIntegrationTypeAPIDTO";
import { IntegrationTypeAPI } from "@modules/integrations/entities/IntegrationTypeAPI";

class IntegrationTypeAPIRepository implements IIntegrationTypeAPIRepository {
   private repository: Repository<IntegrationTypeAPI>;

   constructor() {
      this.repository = getRepository(IntegrationTypeAPI, DATABASE_API);
   }

   async index({ name }:IIndexIntegrationTypeAPIDTO): Promise<IntegrationTypeAPI> {
      return this.repository.createQueryBuilder()
         .where({ name })
         .getOne()
   }
}

export default IntegrationTypeAPIRepository;
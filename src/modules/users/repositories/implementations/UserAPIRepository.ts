import { Repository } from "typeorm";
import { ApiDataSource } from "@shared/infra/typeorm";

import IUserAPIRepository from "@modules/users/repositories/IUserAPIRepository";
import { UserAPI } from "@modules/users/entities/UserAPI";
import IIndexUserAPIDTO from "@modules/users/dtos/IIndexUserAPIDTO";
import ISearchUserAPIDTO from "@modules/users/dtos/ISearchUserAPIDTO";

class UserAPIRepository implements IUserAPIRepository {
   private repository: Repository<UserAPI>;

   constructor() {
      this.repository = ApiDataSource.getRepository(UserAPI);
   }

   async index({ id }:IIndexUserAPIDTO): Promise<UserAPI> {
      return this.repository.createQueryBuilder()
         .where({ id })
         .getOne()
   }

   async getByCode({ code }:ISearchUserAPIDTO): Promise<UserAPI> {
      return this.repository.createQueryBuilder()
         .where({ code })
         .getOne()
   }
}

export default UserAPIRepository;
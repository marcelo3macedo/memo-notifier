import { getRepository, Repository } from "typeorm";

import IUserAPIRepository from "../IUserAPIRepository";
import { UserAPI } from "@modules/users/entities/UserAPI";
import { DATABASE_API } from "@constants/databases";
import IIndexUserAPIDTO from "@modules/users/dtos/IIndexUserAPIDTO";

class UserAPIRepository implements IUserAPIRepository {
   private repository: Repository<UserAPI>;

   constructor() {
      this.repository = getRepository(UserAPI, DATABASE_API);
   }

   async index({ id }:IIndexUserAPIDTO): Promise<UserAPI> {
      return this.repository.createQueryBuilder()
         .where({ id })
         .getOne()
   }
}

export default UserAPIRepository;
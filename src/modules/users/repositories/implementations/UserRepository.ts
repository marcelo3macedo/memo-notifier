import { getRepository, Repository } from "typeorm";

import IUserRepository from "@modules/users/repositories/IUserRepository";
import { User } from "@modules/users/entities/User";
import IIndexUserDTO from "@modules/users/dtos/IIndexUserDTO";
import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";
import IUpdateUserDTO from "@modules/users/dtos/IUpdateUserDTO";

class UserRepository implements IUserRepository {
   private repository: Repository<User>;

   constructor() {
      this.repository = getRepository(User);
   }

   async create({ key, name, channelType, externalId }:ICreateUserDTO): Promise<void> {
      const user = this.repository.create({
         key,
         name,
         channelType,
         externalId
      })

      this.repository.save(user)
   }

   async index({ key, channelType }:IIndexUserDTO): Promise<User> {
      return this.repository.createQueryBuilder('users')
         .where({ key, channelType })
         .getOne()
   }

   async getById({ id }): Promise<User> {
      return this.repository.createQueryBuilder('users')
         .where({ id })
         .getOne()
   }

   async update({ id, key, channelType, externalId }:IUpdateUserDTO): Promise<void> {
      const user = {
         key,
         channelType,
         externalId
       }
   
       this.repository.update({ id }, user);
   }
}

export default UserRepository;
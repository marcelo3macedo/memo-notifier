import { inject, injectable } from "tsyringe";

import IUserRepository from "@modules/users/repositories/IUserRepository";
import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";

@injectable()
export default class CreateUserUseCases {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

   async execute({ key, name, channelType, externalId }:ICreateUserDTO): Promise<void> {
       return this.userRepository.create({
            key,
            name,
            channelType,
            externalId
       })
   }
}
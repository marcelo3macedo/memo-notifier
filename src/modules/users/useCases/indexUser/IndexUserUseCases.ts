import { inject, injectable } from "tsyringe";

import IUserRepository from "@modules/users/repositories/IUserRepository";
import IIndexUserDTO from "@modules/users/dtos/IIndexUserDTO";
import { User } from "@modules/users/entities/User";

@injectable()
export default class IndexUserUseCases {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

   async execute({ key, channelType }:IIndexUserDTO): Promise<User> {
        return this.userRepository.index({
            key,
            channelType
        })
   }
}
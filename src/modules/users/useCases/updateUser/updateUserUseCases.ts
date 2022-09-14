import { inject, injectable } from "tsyringe";

import IUserRepository from "@modules/users/repositories/IUserRepository";
import IUpdateUserDTO from "@modules/users/dtos/IUpdateUserDTO";

@injectable()
export default class UpdateUserUseCases {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

   async execute({ id, key, channelType, externalId }:IUpdateUserDTO): Promise<void> {
       return this.userRepository.update({
            id,
            key,
            channelType,
            externalId
       })
   }
}
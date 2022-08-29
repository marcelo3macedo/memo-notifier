import { inject, injectable } from "tsyringe";

import IUserAPIRepository from "@modules/users/repositories/IUserAPIRepository";
import IIndexUserAPIDTO from "@modules/users/dtos/IIndexUserAPIDTO";
import { UserAPI } from "@modules/users/entities/UserAPI";

@injectable()
export default class IndexUserAPIUseCases {
    constructor(
        @inject("UserAPIRepository")
        private userAPIRepository: IUserAPIRepository
    ) {}

   async execute({ id }:IIndexUserAPIDTO): Promise<UserAPI> {
        return this.userAPIRepository.index({
            id
        })
   }
}
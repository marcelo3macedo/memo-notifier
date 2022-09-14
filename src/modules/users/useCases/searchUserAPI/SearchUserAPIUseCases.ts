import { inject, injectable } from "tsyringe";

import IUserAPIRepository from "@modules/users/repositories/IUserAPIRepository";
import { UserAPI } from "@modules/users/entities/UserAPI";
import ISearchUserAPIDTO from "@modules/users/dtos/ISearchUserAPIDTO";

@injectable()
export default class SearchUserAPIUseCases {
    constructor(
        @inject("UserAPIRepository")
        private userAPIRepository: IUserAPIRepository
    ) {}

   async execute({ code }:ISearchUserAPIDTO): Promise<UserAPI> {
        return this.userAPIRepository.getByCode({
            code
        })
   }
}
import { User } from "@modules/users/entities/User";
import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";
import IIndexUserDTO from "@modules/users/dtos/IIndexUserDTO";
import IUpdateUserDTO from "../dtos/IUpdateUserDTO";
import IIndexByIdUserDTO from "../dtos/IIndexByIdUserDTO";

export default interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>;
    index(data: IIndexUserDTO): Promise<User>;
    getById(data: IIndexByIdUserDTO): Promise<User>;
    update(data: IUpdateUserDTO): Promise<void>;
}
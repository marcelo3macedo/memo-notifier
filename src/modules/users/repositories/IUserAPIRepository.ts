import IIndexUserAPIDTO from "@modules/users/dtos/IIndexUserAPIDTO";
import ISearchUserAPIDTO from "@modules/users/dtos/ISearchUserAPIDTO";
import { UserAPI } from "@modules/users/entities/UserAPI";

export default interface IUserAPIRepository {
    index(data: IIndexUserAPIDTO): Promise<UserAPI>;
    getByCode(data:ISearchUserAPIDTO): Promise<UserAPI>
}
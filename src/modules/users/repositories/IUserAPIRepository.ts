import IIndexUserAPIDTO from "../dtos/IIndexUserAPIDTO";
import ISearchUserAPIDTO from "../dtos/ISearchUserAPIDTO";
import { UserAPI } from "../entities/UserAPI";

export default interface IUserAPIRepository {
    index(data: IIndexUserAPIDTO): Promise<UserAPI>;
    getByCode(data:ISearchUserAPIDTO): Promise<UserAPI>
}
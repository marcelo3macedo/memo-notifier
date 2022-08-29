import IIndexUserAPIDTO from "../dtos/IIndexUserAPIDTO";
import { UserAPI } from "../entities/UserAPI";

export default interface IUserAPIRepository {
    index(data: IIndexUserAPIDTO): Promise<UserAPI>;
}
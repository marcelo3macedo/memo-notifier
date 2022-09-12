import IListSessionAPIDTO from "@modules/sessions/dtos/IListSessionAPIDTO";
import { SessionAPI } from "@modules/sessions/entities/SessionAPI";
import IIndexSessionAPIDTO from "../dtos/IIndexSessionAPIDTO";
import IRemoveSessionAPIDTO from "../dtos/IRemoveSessionAPIDTO";

export default interface ISessionAPIRepository {
  list(data: IListSessionAPIDTO): Promise<SessionAPI[]>;
  index(data: IIndexSessionAPIDTO): Promise<SessionAPI>;
  remove(data: IRemoveSessionAPIDTO): Promise<void>;
}
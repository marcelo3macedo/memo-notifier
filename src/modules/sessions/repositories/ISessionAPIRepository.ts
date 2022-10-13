import IListSessionAPIDTO from "@modules/sessions/dtos/IListSessionAPIDTO";
import { SessionAPI } from "@modules/sessions/entities/SessionAPI";
import IIndexSessionAPIDTO from "@modules/sessions/dtos/IIndexSessionAPIDTO";
import IRemoveSessionAPIDTO from "@modules/sessions/dtos/IRemoveSessionAPIDTO";

export default interface ISessionAPIRepository {
  list(data: IListSessionAPIDTO): Promise<SessionAPI[]>;
  index(data: IIndexSessionAPIDTO): Promise<SessionAPI>;
  remove(data: IRemoveSessionAPIDTO): Promise<void>;
}
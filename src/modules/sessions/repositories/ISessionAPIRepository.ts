import IListSessionAPIDTO from "@modules/sessions/dtos/IListSessionAPIDTO";
import { SessionAPI } from "@modules/sessions/entities/SessionAPI";

export default interface ISessionAPIRepository {
  list(data: IListSessionAPIDTO): Promise<SessionAPI[]>;
}
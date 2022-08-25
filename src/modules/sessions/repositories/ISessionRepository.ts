import { Session } from "@modules/sessions/entities/Session";
import ICreateSessionDTO from "@modules/sessions/dtos/ICreateSessionDTO";
import IIndexSessionDTO from "@modules/sessions/dtos/IIndexSessionDTO";
import IRemoveSessionDTO from "@modules/sessions/dtos/IRemoveSessionDTO";

export default interface ISessionRepository {
  index(data: IIndexSessionDTO): Promise<Session>;
  create(data: ICreateSessionDTO): Promise<void>;
  remove(data: IRemoveSessionDTO): Promise<void>;  
}
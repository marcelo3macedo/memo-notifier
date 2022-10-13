import IUpdateSessionCardAPIDTO from "@modules/sessions/dtos/IUpdateSessionCardAPIDTO";

export default interface ISessionCardAPIRepository {
  update(data: IUpdateSessionCardAPIDTO): Promise<void>;
}
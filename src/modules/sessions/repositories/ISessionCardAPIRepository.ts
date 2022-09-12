import IUpdateSessionCardAPIDTO from "../dtos/IUpdateSessionCardAPIDTO";

export default interface ISessionCardAPIRepository {
  update(data: IUpdateSessionCardAPIDTO): Promise<void>;
}
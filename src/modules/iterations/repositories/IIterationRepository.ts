import ICreateIterationDTO from "../dtos/ICreateIterationDTO";
import { Iteration } from "../entities/Iteration";

export default interface IIterationRepository {
  create(data: ICreateIterationDTO): Promise<Iteration>;  
}
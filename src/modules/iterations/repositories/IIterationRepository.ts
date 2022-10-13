import ICreateIterationDTO from "@modules/iterations/dtos/ICreateIterationDTO";
import { Iteration } from "@modules/iterations/entities/Iteration";

export default interface IIterationRepository {
  create(data: ICreateIterationDTO): Promise<Iteration>;  
}
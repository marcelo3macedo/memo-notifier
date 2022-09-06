import ICreateIterationDTO from "../dtos/ICreateIterationDTO";

export default interface IIterationRepository {
  create(data: ICreateIterationDTO): Promise<void>;  
}
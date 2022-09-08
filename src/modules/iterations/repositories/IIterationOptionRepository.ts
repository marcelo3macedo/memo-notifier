import ICreateIterationOptionDTO from "../dtos/ICreateIterationOptionDTO";

export default interface IIterationOptionRepository {
  create(data: ICreateIterationOptionDTO): Promise<void>;  
}
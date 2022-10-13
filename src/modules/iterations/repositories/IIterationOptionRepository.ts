import ICreateIterationOptionDTO from "@modules/iterations/dtos/ICreateIterationOptionDTO";

export default interface IIterationOptionRepository {
  create(data: ICreateIterationOptionDTO): Promise<void>;  
}
import ICreateIntegrationAPIDTO from "../dtos/ICreateIntegrationAPIDTO";
import IIndexIntegrationAPIDTO from "../dtos/IIndexIntegrationAPIDTO";
import { IntegrationAPI } from "../entities/IntegrationAPI";

export default interface IIntegrationAPIRepository {
    index(data: IIndexIntegrationAPIDTO): Promise<IntegrationAPI>;
    create(data: ICreateIntegrationAPIDTO): Promise<void>;
}
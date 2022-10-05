import IIndexIntegrationTypeAPIDTO from "../dtos/IIndexIntegrationTypeAPIDTO";
import { IntegrationTypeAPI } from "../entities/IntegrationTypeAPI";

export default interface IIntegrationTypeAPIRepository {
    index(data: IIndexIntegrationTypeAPIDTO): Promise<IntegrationTypeAPI>;
}
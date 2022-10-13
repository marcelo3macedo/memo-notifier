import ICreateIntegrationAPIDTO from "@modules/integrations/dtos/ICreateIntegrationAPIDTO";
import IIndexIntegrationAPIDTO from "@modules/integrations/dtos/IIndexIntegrationAPIDTO";
import { IntegrationAPI } from "@modules/integrations/entities/IntegrationAPI";

export default interface IIntegrationAPIRepository {
    index(data: IIndexIntegrationAPIDTO): Promise<IntegrationAPI>;
    create(data: ICreateIntegrationAPIDTO): Promise<void>;
}
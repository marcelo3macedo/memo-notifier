import IIndexIntegrationTypeAPIDTO from "@modules/integrations/dtos/IIndexIntegrationTypeAPIDTO";
import { IntegrationTypeAPI } from "@modules/integrations/entities/IntegrationTypeAPI";

export default interface IIntegrationTypeAPIRepository {
    index(data: IIndexIntegrationTypeAPIDTO): Promise<IntegrationTypeAPI>;
}
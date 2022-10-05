import { inject, injectable } from "tsyringe";

import { IntegrationAPI } from "@modules/integrations/entities/IntegrationAPI";
import IIntegrationAPIRepository from "@modules/integrations/repositories/IIntegrationAPIRepository";
import IIntegrationTypeAPIRepository from "@modules/integrations/repositories/IIntegrationTypeAPIRepository";

@injectable()
export default class RecoverIntegrationUseCases {
    constructor(
        @inject("IntegrationTypeAPIRepository")
        private integrationTypeAPIRepository: IIntegrationTypeAPIRepository,
        @inject("IntegrationAPIRepository")
        private integrationAPIRepository: IIntegrationAPIRepository
    ) {}

    async execute({ type, id, name }): Promise<IntegrationAPI> {
        const integrationType = await this.integrationTypeAPIRepository.index({ name: type })
        if (!integrationType) return

        let integrationAPI = await this.integrationAPIRepository.index({ externalId: id, typeId: integrationType.id })
        if (!integrationAPI) {
            await this.integrationAPIRepository.create({ typeId: integrationType.id, externalId: id, externalName: name })
            integrationAPI = await this.integrationAPIRepository.index({ externalId: id, typeId: integrationType.id })
        }

        return integrationAPI
    }
}
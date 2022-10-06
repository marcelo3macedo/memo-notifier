import logger from '@lib/LogManager';
import { container } from 'tsyringe';
import UpdateIntegrationUseCases from './UpdateIntegrationUseCases';

export class UpdateIntegrationController {
  static async handle({ content }) {
    try {
      const { id, userId } = JSON.parse(content) || {}

      const updateIntegrationUseCases = container.resolve(UpdateIntegrationUseCases);
      updateIntegrationUseCases.execute({ id, userId })      
    } catch (error) {
      logger.error(`[UpdateIntegrationController] ${error.message}`)
    }
  }
}
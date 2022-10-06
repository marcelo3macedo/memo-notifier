import queue from "@config/queue";
import QueueManager from "@lib/QueueManager";
import { UpdateIntegrationController } from "@modules/integrations/useCases/updateIntegration/UpdateIntegrationController";

class Queue {
    static async activate() {
        await QueueManager.start()

        QueueManager.consume(queue.integrationValidation, UpdateIntegrationController.handle);
    }
}

export { Queue };
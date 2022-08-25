import { Router } from 'express';

import HandleMessageController from '@modules/webhook/useCases/handleMessage/HandleMessageController';

const webhookRoutes = Router();
const handleMessageController = new HandleMessageController();

webhookRoutes.post('/:channelType', handleMessageController.handle);

export { webhookRoutes };
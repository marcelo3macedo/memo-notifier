import { Request, Response } from "express";
import { container } from 'tsyringe';

import logger from "@lib/LogManager";
import HandleMessageUseCases from "./HandleMessageUseCases";

class HandleMessageController {
  async handle(request: Request, response: Response): Promise<Response> {
     try {
        const { channelType } = request.params;
        const requestData = request.body;

        const handleMessageUseCases = container.resolve(HandleMessageUseCases);
        await handleMessageUseCases.execute({ channelType, requestData });

        return response.status(201).json()
     } catch (error) {
        logger.error("[HandleMessageController] handle", error)
        return response.status(error.statusCode).json({ error: error.message });
     }
  }
}

export default HandleMessageController;
import { Router } from "express";
import { webhookRoutes } from "./webhook.routes";

const router = Router();
router.use('/webhook', webhookRoutes);

export { router };
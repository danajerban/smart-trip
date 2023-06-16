import Router from 'express';
import openAIcontrollers from './controllers/openAI.controllers';
import authMiddleware from './middlewares/auth.middleware';
const router = Router();

router.post('/openai/chat', authMiddleware, openAIcontrollers.chat);

export default router;

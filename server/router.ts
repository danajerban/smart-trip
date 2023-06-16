import Router from 'express';
import openAIcontrollers from './controllers/openAI.controllers';
const router = Router();

router.post('/openai/chat', openAIcontrollers.chat);

export default router;

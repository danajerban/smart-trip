import Router from 'express'
import openAIcontrollers from './controllers/openAI.controllers'
const router = Router();

router.post('/openAI-completions', openAIcontrollers.chatbot);


export default router;
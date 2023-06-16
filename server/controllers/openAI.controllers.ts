//TODO save messageHistory to database
import {
  ChatRequest,
  ChatResponse,
  Controllers,
  HttpOptions,
  Message,
} from './openAI.interfaces';

// Prompt parameters
const MODEL: string = 'gpt-3.5-turbo';
const TEMPERATURE: number = 0.7;
const MAX_TOKENS: number = 300;

const controllers: Controllers = {
  chat: async (req, res) => {
    //get user db id from req.user

    const messageHistory: Message[] = [];

    const userMessage: Message = {
      role: 'user',
      content: req.body.message,
    };

    messageHistory.push(userMessage);

    const chatRequest: ChatRequest = {
      model: MODEL,
      messages: messageHistory,
      temperature: TEMPERATURE,
      max_tokens: MAX_TOKENS,
    };

    const options: HttpOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(chatRequest),
    };

    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        options
      );
      if (response.ok) {
        const chatResponse: ChatResponse = await response.json();
        messageHistory.push(chatResponse.choices[0].message);
        res.status(200).send(chatResponse);
      } else {
        const errorResponse = await response.json();
        res.status(400).send(errorResponse);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
};
export default controllers;

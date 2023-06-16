import Express from 'express';

interface Controllers {
  chat: (req: Express.Request, res: Express.Response) => Promise<void>;
}

interface HttpOptions {
  method: string;
  headers: {
    'Content-Type': string;
    Accept: string;
    Authorization: string;
  };
  body: string;
}

interface Message {
  role: string;
  content: string;
}

interface ChatRequest {
  model: string;
  messages: Message[];
  temperature: number;
  max_tokens: number;
}

interface ChatResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: {
    message: Message;
    finish_reason: string;
    index: number;
  }[];
}

export { Controllers, HttpOptions, Message, ChatRequest, ChatResponse };

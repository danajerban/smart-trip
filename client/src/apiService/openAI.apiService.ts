interface HttpOptions {
  method: string;
  headers: {
    'Content-Type': string;
  };
  body: string;
}

interface Message {
  role: string;
  content: string;
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

async function sendMessageToChatGPT(content: string) {
  const options: HttpOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: content }),
  };
  try {
    const response = await fetch('http://localhost:3001/openai/chat', options);
    if (response.ok) {
      const chatResponse: ChatResponse = await response.json();
      return chatResponse;
    } else {
      const errorResponse: Error = await response.json();
      return errorResponse;
    }
  } catch (error) {
    console.error(error);
    return 'Internal Server Error';
  }
}

export default sendMessageToChatGPT;

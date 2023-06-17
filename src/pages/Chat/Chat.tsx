import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//@ts-ignore
import styles from './styles.module.css';
import 'react-toastify/dist/ReactToastify.css';
import sendMessageToChatGPT from '../../apiService/openAI.apiService';
import Spinner from '../../components/Spinner/Spinner';

interface Message {
  role: string;
  content: string;
}

interface Chat {
  title: string;
  messages: Message[];
}

function ChatGPT() {
  const [userMessage, setUserMessage] = useState('');
  const [currentChat, setCurrentChat] = useState<Chat>({
    title: '',
    messages: [],
  });
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const createNewChat = () => {
    setUserMessage('');
    setCurrentChat({
      title: '',
      messages: [],
    });
  };

  const processMessage = async () => {
    if (userMessage === '')
      return toast('Hmmm I think you forgot to type something', {
        toastId: 'emptyMessage',
      });
    if (currentChat.title === '') {
      currentChat.title = userMessage;
      setChatHistory([...chatHistory, currentChat]);
    }
    const newMessage: Message = {
      role: 'User',
      content: userMessage,
    };
    currentChat.messages.push(newMessage);
    setUserMessage('');
    setShowSpinner(true);
    const response = await sendMessageToChatGPT(userMessage);
    setShowSpinner(false);
    if (response instanceof Error || response === 'Internal Server Error') {
      toast('Oops, something went wrong', {
        toastId: 'serverError',
      });
    } else {
      const assistantMessage: Message = {
        role: 'Assistant',
        content: response.choices[0].message.content,
      };
      currentChat.messages.push(assistantMessage);
      setCurrentChat(currentChat);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      processMessage();
    }
  };

  return (
    <div className={styles.chat}>
      <section className={styles.sideBar}>
        <button className={styles.newButton} onClick={createNewChat}>
          + New Chat
        </button>
        <ul className={styles.history}>
          {chatHistory?.map((chat, index) => (
            <li key={index} onClick={() => setCurrentChat(chat)}>
              {chat.title}
            </li>
          ))}
        </ul>
        <nav className="thisNav">
          <p>Smart Trip</p>
        </nav>
      </section>
      <section className={styles.main}>
        {currentChat.title !== '' ? (
          <h1>{currentChat.title}</h1>
        ) : (
          <h1>Smart Trip</h1>
        )}
        <ul className={styles.feed}>
          {currentChat.messages.map((message, index) => (
            <li key={index}>
              <p className={styles.role}>{message.role}:</p>
              <p>{message.content}</p>
            </li>
          ))}
        </ul>
        <div className={styles.bottomSection}>
          <div className={styles.inputContainer}>
            <input
              className={styles.chatInput}
              type="text"
              placeholder="Type a message..."
              value={userMessage}
              onChange={handleInputChange}
              onKeyDown={handleEnterKeyPress}
            />
            <button className={styles.submitButton} onClick={processMessage}>
              ➢
            </button>

          </div>
          {showSpinner && <Spinner />}
          <p className={styles.info}>Powered by chatGPT</p>
        </div>
      </section>
    </div>
  );
}

export default ChatGPT;

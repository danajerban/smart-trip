import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Chat.module.css'
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
      <section className={styles.sideBar} data-testid="sidebar">
        <button className={styles.newButton} onClick={createNewChat} data-testid="sidebar-button">
          + New Chat
        </button>
        <ul className={styles.history} role='list' >
          {chatHistory?.map((chat, index) => (
            <li role='listitem' key={index} onClick={() => setCurrentChat(chat)}>
              {chat.title}
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.main} data-testid="main-section">
        {currentChat.title !== '' ? (
          <h1 data-testid="chat-title">{currentChat.title}</h1>
        ) : (
          <h1 data-testid="default-title">Smart Trip</h1>
        )}
        <ul className={styles.feed} data-testid="feed">
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
              data-testid="input"
              className={styles.chatInput}
              type="text"
              placeholder="Type a message..."
              value={userMessage}
              onChange={handleInputChange}
              onKeyDown={handleEnterKeyPress}
            />
            <button className={styles.submitButton} onClick={processMessage} data-testid= "submit-button">
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

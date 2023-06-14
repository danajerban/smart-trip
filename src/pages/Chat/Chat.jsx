import { useState, useEffect} from "react";
import  styles from "./styles.module.css";
function Chat() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const createNewChat = () => {
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
  };
//the input in this component is a div not a button, beaware :)
  const handlePrevChatsClick = (uniqueTitle) => {
    setCurrentTitle(uniqueTitle);
    setMessage(null);
    setValue("");
  };
  //made this in a single component - app was getting too big
// TODO: change temperature to 0.2 to make it more focused answers not random - experiment at playground: https://platform.openai.com/playground
// rough calc -> 100 tokens 75 words - 1 token 4 chars -> https://platform.openai.com/account/usage
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        "http://localhost:8000/completions",
        options
      );
      const data = await response.json();
      setMessage(data.choices[0].message);
//this above is because the data from open ai comes in this form and we take the first choice which
//is an object containing "user" & "content", in our case we need both of them
      console.log({value})
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    console.log({ currentTitle, value, message });

      if (!currentTitle && message && value) {
        setCurrentTitle(value);
//to keep track of the titles
      }

    if (currentTitle && message && value) {
      setPreviousChats((previousChats) => [
        ...previousChats,
        {
          title: currentTitle,
          role: "user",
          content: value,
        },
        {
          title: currentTitle,
          role: message.role,
          content: message.content,
        }
      ]);
    }
    //setValue("") -> this doesnt work due to feed not rendering properly, even though currentTitle is updated
    //needs some work to perfect it :)
  }, [message, currentTitle]);


  //console.log({ message });
  //console.log({ previousChats });
  
//just need to filter the currentTitle
  const currentChat = previousChats.filter(
    (previousChat) => previousChat.title === currentTitle
  );

  //get rid of the titles re-displaying from previousChats
  const uniqueTitles = Array.from(
    new Set(previousChats.map((previousChat) => previousChat.title))
  );

  //console.log({ uniqueTitles });

  return (
    <div className={styles.chat}>
      <section className={styles.sideBar}>
        <button className={styles.newButton}onClick={createNewChat}>+ New Chat</button>
        <ul className={styles.history}>
          {uniqueTitles?.map((uniqueTitle, index) => (
            <li key={index} onClick={() => handlePrevChatsClick(uniqueTitle)}>
              {uniqueTitle}
            </li>
          ))}
        </ul>
        <nav className="thisNav">
          <p>Smart Trip</p>
        </nav>
      </section>
      <section className={styles.main}>
        {!currentTitle && <h1>Smart Trip</h1>}
        <ul className={styles.feed}>
          {currentChat?.map((chat, index) =>
            <li key={index}>
              <p className={styles.role}>{chat.role}:</p>
              <p>{chat.content}</p>
            </li>
          )}
        </ul>
        <div className={styles.bottomSection}>
          <div className={styles.inputContainer}>
            <input  className={styles.chatInput} value={value} onChange={(e) => setValue(e.target.value)} />
            <div className={styles.submitButton} onClick={getMessages} >
              ➢
            </div>
          </div>
          <p className={styles.info}>Powered by chatGPT</p>
        </div>
      </section>
    </div>
  );
}

export default Chat;

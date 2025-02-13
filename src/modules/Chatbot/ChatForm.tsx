import { useRef } from 'react';
import "./chat.css";
import { MdKeyboardArrowUp } from "react-icons/md";

interface ChatMessage {
  role: "user" | "model";
  text: string;
  isError: boolean;
}

interface ChatFormProps {
  chatHistory: ChatMessage[];
  setChatHistory: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  generateBotResponse: (input: string) => void;
}

const ChatForm: React.FC<ChatFormProps> = ({chatHistory, setChatHistory, generateBotResponse}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);;

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!inputRef.current) return;
    const userMessage = inputRef.current.value.trim();

    if(!userMessage) return
    inputRef.current.value = "";

    // UPDATE CHAT HISTORY WITH THE USER MESSAGE
    setChatHistory((history) => [...history, { role: "user", text: userMessage } as ChatMessage])

    // ADD A "Thinking..." placeholder for the bot's response
    setTimeout(() => {
        setChatHistory((history) => [...history, { role: "model", text: "Thinking..."} as ChatMessage]);

        generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
    }, 600) 
  }

  return (
    <form action="#" className='chat-form' onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" placeholder='Message...' className='message-input' required/>
        <button className='material-symbols-rounded'><MdKeyboardArrowUp className='u-arrow'/></button>
    </form>
  );
}

export default ChatForm;

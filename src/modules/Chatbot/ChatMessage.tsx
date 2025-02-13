import { RiRobot2Fill } from "react-icons/ri";

interface ChatMessage {
  role: "user" | "model";
  text: string;
  isError: boolean;
}

interface ChatMessageProps {
  chat: ChatMessage;
}
const ChatMessage: React.FC<ChatMessageProps> = ({chat}) => {
  return (
    <div className={`message ${chat.role === "model" ? "bot-message" : "user-message"} ${chat.isError ? "error" : ""}`}>
        {chat.role === "model" &&  <RiRobot2Fill className='robot'/>}
        <p className='message-text'>{chat.text}</p>
    </div>
  );
}

export default ChatMessage;

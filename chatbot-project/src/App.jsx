import { useState } from 'react';
import { ChatInput } from './componenst/ChatInput';
import ChatMessages from './componenst/ChatMessages';
import './App.css'

function App() {
      const [chatMessages, setChatMessages] = useState([]);
      const [isLoading, setIsLoading] = useState(false);

      return (
        <div className="app-container">
          {chatMessages.length === 0 && <div className="welcome-message">Welcome to the chatbot project! Send a message using the text box</div>}
          <ChatMessages 
            chatMessages={chatMessages}
            isLoading={isLoading}
          />
          <ChatInput 
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            setIsLoading={setIsLoading}
          />
        </div>
      );
    }

export default App

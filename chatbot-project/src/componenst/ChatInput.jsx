import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css'

export function ChatInput ({chatMessages, setChatMessages, setIsLoading}) {
      const [inputText, setInputText] = useState('');

      function saveInputText (event) {
        setInputText(event.target.value);
      }

      function sendMessage () {
        const newChatmessage = [
          ...chatMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
          }
        ];
        setChatMessages(newChatmessage);
        setIsLoading(true);

        setTimeout(() => {
          const response = Chatbot.getResponse(inputText);
          setChatMessages([
            ...newChatmessage,
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);
          setIsLoading(false);
        }, 2000); // Adjust this delay (in milliseconds) as needed for realism

        setInputText('');
      }

      return (  
        <div className="chat-input-container">
          <input 
            placeholder="Send a message to Chatbot" 
            size="30" 
            onChange={saveInputText}
            value={inputText}
            className="chat-input"
          />   
          <button
            onClick={sendMessage}         
            className="send-button"
          >Send</button>       
        </div>
      );
    }
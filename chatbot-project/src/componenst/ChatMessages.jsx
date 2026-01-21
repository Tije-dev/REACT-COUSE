import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import LoadingSpinnerGif from '../assets/loading-spinner.gif';
import RobotProfileImage from '../assets/robot.png';
import './ChatMessages.css'



function ChatMessages ({chatMessages, isLoading}){
      const chatMessageRef = useRef(null);

      useEffect(() => {
        const containerElem = chatMessageRef.current;
        if(containerElem){
          containerElem.scrollTop = containerElem.scrollHeight;
        }
      }, [chatMessages]);

      return (
        <div className="chat-message-container" ref={chatMessageRef}>
          {chatMessages.map((chatMessage) => {
            return ( 
              <ChatMessage 
                message={chatMessage.message}
                sender={chatMessage.sender}
                key={chatMessage.id}
              />
            );
          })}
          {isLoading && (
            <div className="loading-spinner">
              <img src={RobotProfileImage} className="chat-message-profile" />
              <img className="loading-spinner-gif" src={LoadingSpinnerGif} alt="Loading..." />
            </div>
          )}
        </div>
      );
    }


    export default ChatMessages;
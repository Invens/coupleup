import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Header from './header/page';

const messageTone = new Audio('/sounds/tone.mp3'); // Ensure you have this file in your public/sounds directory
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // Speech Recognition API

const ChatBox = ({ chatbot }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: `Hello! I'm ${chatbot.name}. How can I help you today?` },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false); // Track bot typing status
  const [isRecording, setIsRecording] = useState(false); // Track recording status
  const messagesEndRef = useRef(null);
  const chatBoxRef = useRef(null); // Reference to the chatbox div

  // Function to check if the chatbox is scrolled to the bottom
  const isScrolledToBottom = () => {
    if (!chatBoxRef.current) return false;
    const { scrollTop, scrollHeight, clientHeight } = chatBoxRef.current;
    return scrollHeight - scrollTop === clientHeight;
  };

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput('');

    // Play sound on user message send
    messageTone.play();

    // Check if chatbox is at the bottom before the message is sent
    const shouldScroll = isScrolledToBottom();

    try {
      setIsTyping(true); // Show typing indicator when bot is processing
      const response = await axios.post('/api/chat', {
        prompt: chatbot.prompt,
        messages: [...messages, newMessage],
      });

      setIsTyping(false); // Hide typing indicator once response is received
      const botMessage = { sender: 'bot', text: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);

      // Play sound on bot message receive
      messageTone.play();

      // Scroll only if the user was at the bottom before sending the message
      if (shouldScroll) {
        // messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error(error);
      const errorMessage = { sender: 'bot', text: 'Sorry, something went wrong.' };
      setMessages((prev) => [...prev, errorMessage]);
      setIsTyping(false); // Hide typing indicator on error
    }
  };

  // Voice recognition handler
  const startRecording = () => {
    if (!SpeechRecognition) {
      alert('Your browser does not support voice recognition.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.onerror = (event) => {
      console.error(event.error);
      setIsRecording(false);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript); // Set recognized speech as input
    };

    recognition.start();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      <div className="flex flex-col h-full border border-gray-300 rounded-lg overflow-hidden bg-gray-100">
        {/* Chat messages area */}
        <div
          ref={chatBoxRef}
          className="flex-1 p-4 overflow-y-auto bg-gray-200 max-h-[500px]"
        > {/* Set max-height for the chat box */}
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 max-w-xs rounded-lg px-4 py-2 ${msg.sender === 'user' ? 'bg-green-200 ml-auto text-right' : 'bg-gray-300 mr-auto text-left'}`}>
              <span>{msg.text}</span>
            </div>
          ))}
          {isTyping && (
            <div className="mb-2 max-w-xs bg-gray-300 rounded-lg px-4 py-2 mr-auto text-left">
              <span>Typing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="flex p-2 border-t border-gray-300 bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border-none rounded-full bg-gray-100 outline-none"
          />

          {/* Send Button */}
          <button onClick={sendMessage} className="ml-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2">
            Send
          </button>

          {/* Voice Button */}
          <button
            onClick={startRecording}
            className={`ml-2 bg-${isRecording ? 'red' : 'green'}-500 hover:bg-${isRecording ? 'red' : 'green'}-600 text-white rounded-full px-4 py-2`}
          >
            {isRecording ? 'Listening...' : '🎤'}
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBox;

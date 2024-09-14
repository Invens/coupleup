"use client";
import { notFound } from 'next/navigation'; // for handling 404 pages
import { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import ChatBox from '../../../components/ChatBox';
import Header from '@/components/header/page';
import Image from 'next/image';
import Footer from '@/components/footer/page';

const ChatPage = ({ params }) => {
  const { id } = params;
  const [chatbot, setChatbot] = useState(null);
  const [error, setError] = useState(false);

  // Fetch chatbot data by ID using axios
  useEffect(() => {
    const fetchChatbot = async () => {
      try {
        const response = await axios.get(`https://zf70fr11-5000.inc1.devtunnels.ms/api/chatbots/${id}`); // Fetch chatbot by ID
        setChatbot(response.data); // Set chatbot data
      } catch (err) {
        setError(true); // If error, set to true
      }
    };

    fetchChatbot();
  }, [id]);

  if (error) {
    return notFound(); // Handle 404 if chatbot is not found
  }

  return (
    <>
      <Header />
      <div className="container">
        {chatbot ? (
          <>
            <div className='flex justify-center'>
              <Image
                src={`https://zf70fr11-5000.inc1.devtunnels.ms/uploads/${chatbot.image}`}
                alt='chat bot image'
                width={100}
                height={100}
                className='rounded-full border-[1px] border-red-500'
              />
            </div>
            <h1 className='mt-[20px] font-bold capitalize pb-[40px]'>
              Chat with <span className='text-red-500 text-2xl'>{chatbot.name}</span>
            </h1>
            <ChatBox chatbot={chatbot} />
          </>
        ) : (
          <p>Loading...</p>
        )}
        <style jsx>{`
          .container {
            max-width: 900px;
            height: 80vh;
            margin: 70px auto;
            padding: 20px; 
            text-align: center;
            display: flex;
            auto-scroll: none;
            flex-direction: column;
            justify-content: space-between;
          }
        `}</style>
      </div>
      <div className='mt-[200px]'>
      
      </div>

      <Footer />
    </>
  );
};

export default ChatPage;

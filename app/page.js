"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import Image from 'next/image';
import FeedbackCarousel from '@/components/feedbacks';
import Footer from '../components/footer/page'
import Header from '@/components/header/page';
const generateSlug = () => {
  const randomText = Math.random().toString(36).substring(2, 7);
  const randomNumber = Math.floor(Math.random() * 10000);
  return `${randomText}-${randomNumber}`;
};

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Home = () => {
  const [chatbots, setChatbots] = useState([]);
 

  useEffect(() => {
    const fetchChatbots = async () => {
      try {
        const response = await axios.get('https://zf70fr11-5000.inc1.devtunnels.ms/api/chatbots');
        setChatbots(response.data);
      } catch (error) {
        console.error('Error fetching chatbots:', error);
      }
    };

    fetchChatbots();
  }, []);

  // Slider settings
 
  return (
    <div className="min-h-screen">
      {/* Header */}
    
       <Header/>

      {/* Main Section with Background Image and Blur Effect */}
      <main className="relative bg-red-500 flex flex-col lg:flex-row justify-between items-center p-16 h-auto lg:h-[65vh] overflow-hidden mt-[75px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)', filter: 'blur(8px)', objectFit: 'cover' }}></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between">
          {/* Left: Text Section */}
          <div className="lg:w-1/2 w-full text-center lg:text-left mt-4 lg:mt-0">
            <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-white">Talk to your passion, without interruptions</h1>
            <p className='text-white text-lg lg:text-xl w-[70vw] lg:w-[35vw]'>Passion fuels creativity, turning challenges into growth. It drives you forward, making the journey fulfilling and unlocking your true potential.</p>

            <Link href="/">
              <button className='px-4 py-2 text-white border-2 border-red-400 rounded-lg hover:bg-white hover:text-black mt-12'>Chat Now</button>
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative lg:w-1/2 w-full flex justify-center mt-6 lg:mt-0">
            <div className="relative w-[90vw] lg:w-[50vw] h-[50vh] overflow-hidden">
              {/* Blurred border effect */}
              <div className="absolute inset-0 rounded-md shadow-2xl filter blur-md bg-red-500 opacity-40 z-10"></div>
              {/* Main image */}
              <Image
                src="/couple.jpg"
                height={1000}
                width={1000}
                alt="main image"
                className="w-[80vw] lg:w-[79vw] lg:h-[49vh] h-[50vh] object-cover rounded-md shadow-2xl relative z-20"
              />
            </div>
          </div>
        </div>
      </main>


      {/* Active Users Section */}
      <section className="p-12">
        <h2 className="text-xl mb-4 p-4 ">Active Users</h2>
        <div className="flex flex-wrap gap-6 justify-center" id='active'>
          {chatbots.map((bot) => {
            const slug = generateSlug();
            return (
              <Link href={`/chat/${bot.id}-${slug}`} key={bot.id} className="flex flex-col items-center">
                <img
                  src={`https://zf70fr11-5000.inc1.devtunnels.ms/uploads/${bot.image}`}
                  alt={bot.name}
                  className="w-32 h-32 rounded-full mb-2 shadow-lg"
                  style={{
                    borderRadius: '50%',
                    border: `4px solid ${getRandomColor()}`,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    transform: 'translateY(0px)',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0px)';
                  }}
                />
                <p>{bot.name}</p>

                <button className='border-2 border-red-400  text-black p-2 rounded-lg mt-2 shadow-lg'>Chat Now</button>
              </Link>
            );
          })}

          {/* <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full mb-2"></div>
            <p>More...</p>
          </div> */}
        </div>
      </section>

      <div className="h-auto">
        {/* Horizontal line */}
        <p className="h-[1px] bg-black w-[90vw] mx-auto"></p>

        {/* Main Content Section */}
        <div className="h-auto py-8">
          {/* Top Text Section */}
          <div>
            <h2 className="text-center p-4 text-lg md:text-2xl">Reach People That You Like</h2>
            <div className="flex justify-center">
              <h1 className="text-center text-xl md:text-2xl font-semibold w-[80vw] md:w-[60vw] lg:w-[40vw]">
                Connect with real conversations on CoupleUp, where AI meets human interaction.
              </h1>
            </div>
          </div>

          {/* First Section (Mobile: Image first, Desktop: Text first) */}
          <div className="flex flex-col-reverse lg:flex-row justify-center gap-5 mt-12 lg:mt-[100px] w-full px-4 lg:px-12">
            {/* Text Section */}
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <p className="italic text-lg lg:text-xl">Discover New Friendships with AI</p>
              <h1 className="text-lg md:text-2xl font-extrabold text-black capitalize mt-4">
                Engage in Fun, Interest-Based <span className="text-red-500">Conversations</span>
              </h1>
              <p className="mt-4 text-base lg:text-lg w-full lg:w-[90%]">
                Explore new connections by discussing your favorite topics and activities. From hobbies to personal interests, CoupleUp ensures that every conversation is meaningful and tailored to your likes.
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
              <Image
                src="/ai.png"
                width={1000}
                height={1000}
                alt="ai image of couple up"
                className="w-[80vw] h-[40vh] lg:w-[40vw] lg:h-[40vh] object-cover shadow-lg rounded-lg"
              />
            </div>
          </div>

          {/* Second Section (Mobile: Image first, Desktop: Image first with reverse order) */}
          <div className="flex flex-col-reverse lg:flex-row-reverse justify-center gap-10 mt-12 lg:mt-[100px] w-full px-4 lg:px-12">
            {/* Text Section */}
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <p className="italic text-lg lg:text-xl">Say Hello to Strangers Worldwide</p>
              <h1 className="text-lg md:text-2xl font-extrabold text-black capitalize mt-4">
                Meet AI-Powered Human-like Bots
              </h1>
              <p className="mt-4 text-base lg:text-lg w-full lg:w-[90%]">
                Engage in realistic and meaningful conversations with our AI-powered chatbots. Designed to mimic human interactions, these bots provide a unique chatting experience, allowing you to connect and share feelings just like you would with a real person.
              </p>
            </div>

            {/* Image Section (zigzag on desktop) */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-center">
              <Image
                src="/3.png"
                width={1000}
                height={1000}
                alt="ai image"
                className="w-[80vw] h-[40vh] lg:w-[40vw] lg:h-[40vh] object-cover shadow-lg rounded-lg"
              />
            </div>
          </div>

          {/* Third Section (Mobile: Image first, Desktop: Text first) */}
          <div className="flex flex-col-reverse lg:flex-row justify-center gap-5 mt-12 lg:mt-[100px] w-full px-4 lg:px-12">
            {/* Text Section */}
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <p className="italic text-lg lg:text-xl">Make the Most Out of Your Chats</p>
              <h1 className="text-lg md:text-2xl font-extrabold text-black capitalize mt-4">
                Experience the Best of Online Chatting
              </h1>
              <p className="mt-4 text-base lg:text-lg w-full lg:w-[90%]">
                Discover a platform that offers a blend of engaging text conversations and AI-powered interactions. Whether you’re seeking to connect with real people or interact with human-like AI bots, CoupleUp provides the tools to enhance your chatting experience.
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
              <Image
                src="/bot.png"
                width={1000}
                height={1000}
                alt="ai image of couple up"
                className="w-[80vw] h-[40vh] lg:w-[40vw] lg:h-[40vh] object-cover shadow-lg rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
      <div className='flex justify-center'>
      <FeedbackCarousel />
      
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Array of feedbacks with some foreign feedback
const feedbacks = [
  { name: "Amit Sharma", feedback: "Amazing platform, really helped me connect with new people!" },
  { name: "Priya Singh", feedback: "CoupleUp is super fun and interactive. I enjoy using it every day!" },
  { name: "Rahul Mehta", feedback: "I love how CoupleUp uses AI to enhance conversations." },
  { name: "Anjali Verma", feedback: "Such a cool experience! I never thought I'd make so many friends." },
  { name: "Siddharth Patel", feedback: "Great for meeting new people and the AI feature is a game-changer." },
  { name: "Neha Gupta", feedback: "The best chatting platform I've ever used, highly recommend it!" },
  { name: "Ravi Kumar", feedback: "The AI bots feel almost human. Great job!" },
  { name: "Sonia Nair", feedback: "Awesome experience! I met some really interesting people here." },
  { name: "Ajay Reddy", feedback: "Fun platform, easy to use, and very interactive." },
  { name: "Pooja Iyer", feedback: "I love CoupleUp! It’s a great way to make friends worldwide." },
  { name: "Emily Johnson", feedback: "CoupleUp is a brilliant way to connect with people across the world." },
  { name: "Carlos Martinez", feedback: "I really enjoy using this app. It's user-friendly and fun." },
  { name: "Julia Müller", feedback: "Great platform! I’ve made so many friends globally." },
  { name: "Marie Dubois", feedback: "CoupleUp is engaging, and the conversations are always interesting." },
  { name: "Akira Yamamoto", feedback: "I’ve connected with people from different countries. Love it!" }
];

const FeedbackCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full p-8 relative h-[80vh]">
      <h2 className="text-center text-2xl font-bold mb-6">Users Feedback</h2>
      <Slider {...settings}>
        {feedbacks.map((item, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-[80%] md:w-[60%] lg:w-[80%] h-[40vh] p-6 rounded-lg bg-gradient-to-r from-red-500 via-black to-white transform hover:scale-105 transition-transform duration-300 flex flex-col justify-center items-center shadow-2xl">
              <p className="text-lg text-white font-semibold italic text-center shadow-text-3d">"{item.feedback}"</p>
              <h3 className="mt-4 text-xl text-white font-bold text-center shadow-text-3d">{item.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackCarousel;

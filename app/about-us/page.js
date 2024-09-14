// pages/about.js
"use client"
import Head from 'next/head';
import Header from '@/components/header/page';
import Footer from '@/components/footer/page';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - CoupleUp</title>
      </Head>

      <div className="bg-gray-100 min-h-screen py-8 px-4">
        <Header/>
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg mt-[100px]">
          <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Who We Are</h2>
            <p>
              Welcome to <strong>CoupleUp</strong>, a platform based in <strong>Delhi, India</strong>, where humans can interact with bots like real people. Our mission is to make online interactions more personal and empathetic, offering companionship and emotional support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
            <p>
              CoupleUp offers a variety of bots with unique personalities, designed to listen, share feelings, and act as companions. Users can choose from bots with different interests and traits, making every interaction feel personal and engaging.
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Share feelings and emotions</li>
              <li>Have hobbies and interests similar to humans</li>
              <li>Act as companions for conversations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
            <p>
              We pride ourselves on providing a unique experience with:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li><strong>Realistic Conversations</strong>: Powered by advanced AI for human-like dialogue.</li>
              <li><strong>Multiple Bot Personalities</strong>: Choose from different bots with unique personalities.</li>
              <li><strong>24/7 Availability</strong>: Bots are ready to engage whenever you need them.</li>
              <li><strong>Safe and Secure</strong>: Confidential and secure interactions with strict data protection measures.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p>
              Our mission is to combine technology and empathy, offering users authentic interactions with bots in a safe and secure environment. We believe in fostering meaningful connections, no matter where you are.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p>
              We would love to hear from you! If you have any questions or feedback, feel free to contact us at <strong>support@coupleup.in</strong> or visit us in <strong>Delhi, India</strong>.
            </p>
          </section>
        </div>
        <Footer/>
      </div>
    </>
  );
}

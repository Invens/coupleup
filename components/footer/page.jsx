import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      {/* Upper Section */}
      <div className="w-full bg-gradient-to-r from-red-500 via-purple-600 to-indigo-500 text-center py-10 px-6 md:px-16 lg:px-24 rounded-lg">
        <h2 className="text-3xl font-bold mb-3">Stay Connected</h2>
        <p className="text-lg mb-6">
          Join our Discord Server to get updates before anyone else.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/join-discord" >
            <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition-all">
              Join Discord
            </button>
          </Link>
          <Link href="/support" >
            <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition-all">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/" >
              <Image
                src="/coupleup.png" 
                alt="CoupleUp"
                width={150}
                height={40}
              />
            </Link>

          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-sm text-gray-400">
            <Link href="/terms-and-conditions" >
              <span className="hover:text-white transition-colors cursor-pointer">Terms Of Service</span>
            </Link>
            <Link href="/privacy-policy" >
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            </Link>
            <Link href="/support" >
              <span className="hover:text-white transition-colors cursor-pointer">Contact Us</span>
            </Link>
            {/* <Link href="/refund" >
              <span className="hover:text-white transition-colors cursor-pointer">Refund Policy</span>
            </Link> */}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://instagram.com" >
              <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://facaebook.com" >
              <Image src="/facebook.webp" alt="facebook" width={50} height={24} />
            </Link>
            <Link href="https://twitter.com" >
              <Image src="/x.avif" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="https://discord.com" >
              <Image src="/discord.jpg" alt="Discord" width={24} height={24} />
            </Link>
            <Link href="https://tiktok.com" >
              <Image src="/tiktok.png" alt="TikTok" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black py-4 text-center text-gray-500 text-xs">
        <p>All rights reserved. CypherNxt Labs LLP.</p>
      </div>
    </footer>
  );
};

export default Footer;

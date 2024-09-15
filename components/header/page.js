import React from 'react'
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick';
import { HiMenu } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';

function Header() {
  const { data: session } = useSession();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
      const handleSidebarToggle = () => {
        setIsSidebarOpen(prevState => !prevState);
      };
    
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-6 h-[10vh] bg-black text-white">
    <div className="flex items-center">
        <Link href="/">
      <Image
        src="/coupleup.png"
        height={1000}
        width={1000}
        alt='logo'
        className='lg:h-[18vh] lg:w-[10vw] md:h-[18vh] md:w-[10vw] h-[18vh] w-[40vw]'
      />
      </Link>
    </div>

    {/* Desktop Navigation and Login Button */}
    <div className="hidden lg:flex space-x-12">
      <nav className="flex space-x-12 mt-4">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about-us" className="hover:text-gray-400">About</Link>
        <Link href="/blog" className="hover:text-gray-400">Blog</Link>
        <Link href="/support" className="hover:text-gray-400">Support</Link>
      </nav>
      {session ? (
          <button
            onClick={() => signOut()}
            className="border border-gray-400 text-white py-2 px-4 rounded shadow-md hover:bg-gray-700"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => signIn('google')}
            className="border border-gray-400 text-white py-2 px-4 rounded shadow-md hover:bg-gray-700"
          >
            Sign In with Google
          </button>
        )}    </div>

    {/* Mobile Menu and Search */}
    <div className="lg:hidden flex items-center space-x-2 absolute right-6 top-6">
      <button onClick={handleSidebarToggle} className="text-white">
        <HiMenu className="h-6 w-6" />
      </button>
      {session ? (
          <button
            onClick={() => signOut()}
            className="border border-gray-400 text-white py-2 px-4 rounded shadow-md hover:bg-gray-700"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => signIn('google')}
            className="border border-gray-400 text-white py-2 px-4 rounded shadow-md hover:bg-gray-700"
          >
            Sign In with Google
          </button>
        )}    </div>

    {/* Sidebar */}
    {isSidebarOpen && (
  <div className="fixed inset-0 bg-white z-50 flex flex-col items-center">
    <div className="mt-4">
      <Image
        src="/coupleup.png"
        height={1000}
        width={1000}
        alt='logo'
        className='h-[vh] w-[40vw]'
      />
    </div>
    <Slider {...sliderSettings} className="w-full mt-4">
      {/* Add more slides as needed */}
    </Slider>
    <nav className="mt-8">
      <Link href="/home" className="block py-2 text-black hover:bg-gray-200 w-full text-center">Home</Link>
      <Link href="/about" className="block py-2 text-black hover:bg-gray-200 w-full text-center">About</Link>
      <Link href="/blog" className="block py-2 text-black hover:bg-gray-200 w-full text-center">Blog</Link>
      <Link href="/support" className="block py-2 text-black hover:bg-gray-200 w-full text-center">Support</Link>
    </nav>
    <button onClick={handleSidebarToggle} className="absolute top-4 right-4 text-red-500">
      Close
    </button>
  </div>
)}

  </header>
  )
}

export default Header
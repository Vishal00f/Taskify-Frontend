"use client"
import { useState } from 'react';
import { DropdownIcon } from "@/components/DropdownIcon";
import Link from "next/link";
import { LoaderPinwheel } from 'lucide-react';

export default function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navlinks = [
    { label: "Product", href: "/product", hasDropdown: true },
    { label: "Services", href: "/services", hasDropdown: true },
    { label: "Resources", href: "/resources", hasDropdown: true },
    { label: "Pricing", href: "/pricing", hasDropdown: false },
    { label: "Enterprise", href: "/enterprise", hasDropdown: false },
    { label: "Contact Us", href: "/contact-us", hasDropdown: false },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between  min-[1025px]:justify-center  gap-4 py-4 px-4 z-50">
      {/* Brand logo section */}
      <div className="brandlogo max-w-[14rem] flex flex-row py-2 rounded-xl px-4 border-2 bg-white">
        <div className="pr-2 text-nowrap">
          <div className='flex flex-row mt-1 items-center'>
            <LoaderPinwheel color="#471273" strokeWidth={2.23} className="mr-2" />
            <span className="font-extrabold text-sm">
              Workshire
            </span>
            <span className="text-xl ml-1 hidden min-[500px]:inline-block">|</span>
          </div>
        </div>
        <div className="text-nowrap font-semibold text-[0.65rem] text-[#292D34] hidden min-[500px]:block">
          <span className="line-clamp-none">The everything</span>
          <span className="line-clamp-none">app for work</span>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden min-[1025px]:flex items-center space-x-4">
        <div className="border-2 px-2 flex flex-row gap-x-4 rounded-xl h-12 items-center bg-white">
          <div className="flex items-center h-full py-0.5  text-nowrap">
            {navlinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="text-sm font-normal hover:bg-gray-100 hover:rounded-lg h-full flex items-center justify-center px-3 transition duration-300"
              >
                {link.label}
                {link.hasDropdown && <DropdownIcon  />}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Login and Sign up buttons */}
      <div className="hidden sm:flex items-center max-[1025px]:fixed max-[1025px]:right-16">
        <div className="border-2 p-0.5 rounded-xl h-12 items-center mr-0 bg-white">
          <div className="flex items-center h-full py-0.5 space-x-2">
            <Link href='/auth/login' className="text-sm text-nowrap font-normal hover:bg-gray-100 hover:rounded-lg h-full flex items-center justify-center px-4 transition duration-300">Log in</Link>
            <Link href='/auth/sign-up' className="text-sm text-nowrap bg-gradient-to-r from-[#4557FF] to-[#9D4EDD] hover:from-[#3F51FF] hover:to-[#8837cf] text-white font-bold rounded-lg h-full flex items-center justify-center px-4 transition duration-300">Sign up</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <button 
        className="lg:hidden w-10 h-10 flex items-center justify-center z-50 border-2 rounded-md bg-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {/* Full-screen Mobile menu with slide animation */}
      <div 
        className={`fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col min-h-screen pt-20 px-4">
          <nav className="flex-grow">
            {navlinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="block py-4 text-lg text-gray-700 border-b border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex justify-between items-center">
                  {link.label}
                  {link.hasDropdown && <DropdownIcon />}
                </div>
              </Link>
            ))}
            <Link 
              href='/auth/login' 
              className="block py-4 text-lg text-gray-700 border-b border-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <Link 
              href='/auth/sign-up' 
              className="block py-4 text-lg text-white bg-gradient-to-r from-[#4557FF] to-[#9D4EDD] rounded-lg mt-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import Link from "next/link";
import Menu from "../dataset/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-100 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://th.bing.com/th/id/OIP.-WXWqkczZZsOk3kfdV2jtgHaF7?w=245&h=196&c=7&r=0&o=5&pid=1.7"
            className="h-8"
            alt="Flowbite Logo"
          />
          <div className="flex flex-col ">
            <h1 className="text-md font-semibold">PARAGRAPH</h1>
            <p className="text-md font-serif">Rewriter</p>
          </div>

        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className="block py-2 text-lg px-3 mr-4 md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-800">
            Blog
          </button>
          <button type="button" className="text-white font-bold bg-gray-700 hover:bg-gray-500 rounded-lg text-sm px-4 py-2 text-center">
            <Link href="/contact">Contact Us</Link>
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link href="/" className="text-lg block py-5 mt-1 px-5 md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-800" aria-current="page">
                Paragraph Rewriter
              </Link>
            </li>
            <li>
              <Link href="#" className="text-lg block py-5 mt-1 px-5 md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-800">
                Paragraph Generator
              </Link>
            </li>
            <li>
              <Link href="#" className="text-lg block py-5 mt-1 px-5 md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-800">
                Sentence Rewriter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

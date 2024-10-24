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
    <nav className="fixed top-0 left-0 w-full z-20 bg-slate-100 h-[60px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://th.bing.com/th/id/OIP.-WXWqkczZZsOk3kfdV2jtgHaF7?w=245&h=196&c=7&r=0&o=5&pid=1.7"
            className="h-[40px] w-[40px]"
            alt="Logo"
          />
          <div>
            <p className="self-center text-lg font-semibold whitespace-nowrap">
              PARAGRAPH
            </p>
            <span className="self-center text-sm font-serif">REWRITER</span>
          </div>
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto bg-slate-100`}>
          <div className="lg:mr-28 md:mr-10">
          <ul className="flex flex-col md:flex-row md:space-x-12 rtl:space-x-reverse md:mt-0 md:bg-transparent">
            {Menu.map((el, idx) => (
              <li key={idx} className="text-lg block py-5 mt-1 px-5 md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-800">
                <Link href={el.link}>{el.title}</Link>
              </li>
            ))}
          </ul>
          </div>
          <div className="flex gap-6 md:ml-4 md:items-center">
            <li className="block py-2 text-lg px-3  md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-800">
              Blog
            </li>
            <button type="button" className="text-white font-bold bg-gray-700 hover:bg-gray-500 rounded-lg text-sm px-4 py-2 text-center">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

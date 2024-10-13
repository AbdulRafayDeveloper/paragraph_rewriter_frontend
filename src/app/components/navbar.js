"use client"
import { useState } from "react";
import Link from "next/link";
import Menu from "../dataset/data";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://th.bing.com/th/id/OIP.-WXWqkczZZsOk3kfdV2jtgHaF7?w=245&h=196&c=7&r=0&o=5&pid=1.7"
              className="h-[60px] w-[60px]"
              alt="Logo"
            />
            <div>
              <p className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                PARAGRAPH
              </p>
              <span className="self-center text-sm font-serif">REWRITER</span>
            </div>
          </a>
          <button
            onClick={toggleMenu}
            data-collapse-toggle="navbar-solid-bg"
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
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col text-lg mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent dark:border-gray-700">
              {
                Menu.map((el,idx)=>(
                    <li key={idx} className="block py-2 px-3 md:p-0 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-800 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-300 dark:hover:text-white md:dark:hover:bg-transparent">
                        <Link href={el.link}>
                            {el.title}
                        </Link>
                    </li>
                ))
                }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import es from "../assets/IMG/argentina.webp";
import en from "../assets/IMG/ingles.webp";

const Navbar = () => {
  return (
    <header>
      <nav className=" bg-white z-50 dark:bg-gray-900 fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap lg:justify-center items-center justify-between mx-auto p-8">
          <Link
            to={"/"}
            className="flex flex-col items-center lg:hidden space-x-3 rtl:space-x-reverse px-5"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Hostal San Jorge
            </span>
            <small className="text-gray-600">Cafayate</small>
          </Link>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto md:order-1"
            id="navbar-hamburger"
          >
            <ul className="flex flex-col justify-center text-[18px] text-white lg:flex-row items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 border-b-[3px] border-b-[#fff] hover:border-b-[3px] hover:border-b-[#0692a2] text-gray-600 hover:text-[#000] rounded "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/habitaciones"}
                  className="block py-2 px-3 rounded border-b-[3px] border-b-[#fff] hover:border-b-[3px] hover:border-b-[#0692a2] text-gray-600 hover:text-[#000]"
                >
                  Habitaciones
                </Link>
              </li>
              <li>
                <Link
                  to={"/nosotros"}
                  className="block py-2 px-3 rounded border-b-[3px] border-b-[#fff] hover:border-b-[3px] hover:border-b-[#0692a2] text-gray-600 hover:text-[#000]"
                >
                  Nosotros
                </Link>
              </li>
              <Link
                to={"/"}
                className="hidden lg:flex flex-col items-center space-x-3 rtl:space-x-reverse px-5"
              >
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Hostal San Jorge
                </span>
                <small className="text-gray-600">Cafayate</small>
              </Link>
              <li>
                <Link
                  to={"/galeria"}
                  className="block py-2 px-3 rounded border-b-[3px] border-b-[#fff] hover:border-b-[3px] hover:border-b-[#0692a2] text-gray-600 hover:text-[#000]"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  to={"/contacto"}
                  className="block py-2 px-3 rounded border-b-[3px] border-b-[#fff] hover:border-b-[3px] hover:border-b-[#0692a2] text-gray-600 hover:text-[#000]"
                >
                  Contacto
                </Link>
              </li>
              <li className="flex">
                <button className="py-2 px-2 flex gap-1 items-center cursor-pointer text-gray-600 hover:text-[#000]">
                  <span>Es</span>
                  <img src={es} className="w-[25px] h-[18px] object-cover" />
                </button>
                <button className="py-2 px-2 flex gap-1 items-center cursor-pointer text-gray-600 hover:text-[#000]">
                  <span>En</span>
                  <img src={en} className="w-[25px] h-[18px] object-cover" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logotipo from '../../assets/logo_ssti.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-teal-400 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logotipo} className="h-12" alt="Logo SSTI" />
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'} md:max-h-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col max-sm:w-80 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-teal-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-teal-400 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to="/" className="text-xl block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/problemas-comunes" className="text-xl block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">
                Problemas Comunes
              </Link>
            </li>
            <li>
              <Link to="/medidas-preventivas" className="text-xl block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">
                Medidas Preventivas
              </Link>
            </li>
            <li>
              <Link to="/directorio-extensiones" className="text-xl block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">
                Directorio de Extensiones
              </Link>
            </li>
            <li>
              <Link to="/ssti" className="text-xl block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700">
                SSTI
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

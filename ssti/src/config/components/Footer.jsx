import React from 'react';
import Logotipo from '../../assets/logo_ssti.png';
import { FaEnvelope, FaPhoneAlt, FaRegAddressBook } from 'react-icons/fa';
import '../../config/Footer.css';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 p-4">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logotipo} className="h-8" alt="Logo SSTI" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SSTI</span>
        </div>
        <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
          <FaEnvelope />
          <a href="mailto:tissste@outlook.com" className="hover:underline">tissste@outlook.com</a>
          <span className="mx-2">or</span>
          <FaPhoneAlt />
          <a href="tel:+527771011400" className="hover:underline">+52 (777) 101 1400</a>
          <FaRegAddressBook />
          <a href="tel:40011" className="hover:underline">40011</a>
          <FaRegAddressBook />
          <a href="tel:40012" className="hover:underline">40012</a>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024 <a href="https://github.com/Lalo104lucky/" className="hover:underline">Lalo104lucky™</a>. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;

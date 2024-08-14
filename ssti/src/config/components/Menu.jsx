import React, { useEffect, useState, useRef } from 'react';
import Logotipo from '../../assets/logo_ssti.png';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaRegClipboard, FaRegFolderOpen, FaPhoneAlt } from "react-icons/fa";
import Perfil from '../../assets/Perfil.png';

function Menu() {
  const [usuario, setUsuario] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null); // Referencia para el botón
  const location = useLocation();

  useEffect(() => {
    const usuarioData = localStorage.getItem('usuario');
    if (usuarioData) {
      setUsuario(JSON.parse(usuarioData));
    }
  }, []);

  const getTitle = () => {
    switch (location.pathname) {
      case '/ssti/tablero':
        return 'Tablero';
      case '/ssti/reportes':
        return 'Reportes';
      case '/ssti/directorio':
        return 'Directorio';
      default:
        return '';
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    // Evita que el dropdown se cierre si se hace clic en el botón
    if (
      dropdownRef.current && 
      !dropdownRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    window.location.href = '/ssti';
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-2 lg:px-6 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end flex-1">
              <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <Link to="/ssti/tablero" className="flex ms-2 md:me-24">
                <img src={Logotipo} className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">SSTI</span>
              </Link>
            </div>
            <div className="flex-1 text-center">
              <h1 className="text-xl font-semibold dark:text-white">{getTitle()}</h1>
            </div>
            <div className="flex items-center justify-end flex-1">
              <div className="flex items-center ms-3 space-x-4 relative">
                <button 
                  ref={buttonRef}
                  type="button" 
                  className="flex items-center text-sm bg-white rounded-full focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-600" 
                  aria-expanded={dropdownOpen} 
                  onClick={toggleDropdown}>
                  <span className="sr-only">Open user menu</span>
                  <img src={Perfil} className="w-10 h-10 rounded-full" alt="User" />
                </button>
                {dropdownOpen && (
                  <div 
                    ref={dropdownRef} 
                    className={`absolute right-0 z-50 w-60 mt-72 origin-top-right bg-white rounded-lg shadow-lg dark:bg-gray-700 transition-all duration-300 ${dropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                    >
                    <div className="flex flex-col items-center px-4 py-3">
                      <img src={Perfil} className="w-16 h-16 rounded-full mb-3" alt="User" />
                      <p className="text-lg font-medium text-gray-900 dark:text-white">{usuario ? usuario.usuario : 'Cargando...'}</p>
                      <p className="text- text-gray-800 font-normal dark:text-gray-400 mt-2">{usuario ? `${usuario.persona.nombre} ${usuario.persona.apellido_p} ${usuario.persona.apellido_m}` : 'Cargando...'}</p>
                    </div>
                    <div className="px-4 py-3">
                      <button
                        onClick={handleLogout}
                        className="w-full py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600"
                      >
                        Cerrar Sesión
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-28 h-screen pt-20 transition-transform -translate-x-full bg-teal-100 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-teal-100 dark:bg-gray-800">
          <ul className="space-y-4 font-medium">
            <li>
              <Link to="/ssti/tablero" className="flex flex-col items-center text-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
                <FaRegClipboard className="text-2xl mb-2" />
                <span className="text-xs">Tablero</span>
              </Link>
            </li>
            <li>
              <Link to="/ssti/reportes" className="flex flex-col items-center text-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
                <FaRegFolderOpen className="text-2xl mb-2" />
                <span className="text-xs">Reportes</span>
              </Link>
            </li>
            <li>
              <Link to="/ssti/directorio" className="flex flex-col items-center text-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
                <FaPhoneAlt className="text-2xl mb-2" />
                <span className="text-xs">Directorio</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="flex-grow bg-teal-100 min-h-screen">
        <div className="p-4 sm:ml-24 pt-20">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Menu;

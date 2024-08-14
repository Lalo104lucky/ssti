import React, { useEffect, useState } from 'react';
import Modal_Perfil from '../../assets/Modal_Perfil.png';
import ModalEditarServicio from './ModalEditarServicio';

function ModalUsuario({ isOpen, onClose, data }) {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.classList.add('overflow-hidden');
    } else {
      setIsVisible(false);
      setTimeout(() => {
        document.body.classList.remove('overflow-hidden');
      }, 300);
    }
  }, [isOpen]);

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      {(isOpen || isVisible) && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ease-out bg-gray-900 bg-opacity-50 ${
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className={`bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg transform transition-transform duration-300 ease-out ${
              isVisible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95'
            } sm:max-w-lg w-full`}
          >
            <div className="flex justify-center items-center mb-4">
              <h3 className="text-xl leading-6 font-medium text-center text-gray-900">Reporte de Incidencia</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
              >
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            <hr className="mb-6 border-gray-300" />

            <div className="flex items-center justify-center mb-6">
              <img
                className="mx-auto rounded-full h-32 w-32"
                src={Modal_Perfil}
                alt="Icono de Usuario"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white text-center mb-2">
              {data.nombre}
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-6 w-full max-w-lg">
              <p className="text-gray-600 dark:text-gray-300 text-center line-clamp-4 leading-relaxed break-words">
                {data.comentario}
              </p>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <button
                className="w-1/3 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-sm text-base font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:text-sm text-center"
                onClick={onClose}
              >
                Regresar
              </button>
              <button
                className="w-1/3 bg-yellow-400 text-white px-4 py-2 hover:bg-yellow-500 rounded-lg shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200 sm:text-sm text-center"
                onClick={handleEditClick}
              >
                Editar
              </button>
            </div>
          </div>
        </div>
      )}

      <ModalEditarServicio
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        data={data}
      />
    </>
  );
}

export default ModalUsuario;

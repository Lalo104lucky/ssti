import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2';

const Modal = ({ closeModal, imgSrc, title }) => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    fecha: "", // Inicializa la fecha vacía
    nombre: "",
    area: "",
    piso: "",
    correo: "",
    comentario: "",
    estado: "Activo",
    equipo: title,
  });

  const [isVisible, setIsVisible] = useState(false);

  // useEffect para establecer la fecha actual
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Formato YYYY-MM-DD
    setFormData((prevState) => ({
      ...prevState,
      fecha: formattedDate,
    }));

    setIsVisible(true);
  }, []);

  // Manejar el cambio en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir recarga de página

    // Realizar POST request
    try {
      const response = await fetch("http://localhost:8080/ssti/servicio/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Manejar la respuesta exitosa
        Swal.fire({
          icon: 'success',
          title: 'Incidencia Registrada',
          text: `¡Gracias por reportar la incidencia. Soporte técnico estará con ustedes en breve!`,
          customClass: {
            title: 'text-xl', 
            content: 'text-lg', 
          },
          showConfirmButton: false,
          timer: 3800,
        });
        closeModal(); 
      } else {
        // Manejar errores
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al intentar registrar la incidencia. Procura no mandar un comentario muy largo.',
          customClass: {
            title: 'text-xl', 
            content: 'text-lg',
          },
          confirmButtonColor: '#E02424', 
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error inesperado al intentar registrar la incidencia.',
        customClass: {
          title: 'text-xl', 
          content: 'text-lg',
        },
        confirmButtonColor: '#E02424', 
      });
    }
  };

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      <div className="flex items-center justify-center min-h-screen px-4 text-center xl:mt-8">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle
          ${isVisible ? 'translate-y-0' : 'translate-y-4'} opacity-100
          sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full`}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-teal-100">
                  <img className="h-7 w-7" src={imgSrc} alt={title} />
                </div>
              </div>
              <div className="flex-grow text-center">
                <h3 className="text-xl leading-6 font-medium text-gray-900 mt-3 sm:mt-0">
                  Registro de Incidencias en el Equipo
                </h3>
              </div>
              <div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="static-modal"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
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
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-4"></div>
            <div className="mt-2 text-center">
              <p className="text-sm text-gray-500">
                Por favor, complete este formulario para reportar fallas en su
                equipo. Nuestro equipo de servicio técnico se pondrá en contacto
                con usted para solucionar el problema.
              </p>
            </div>
            <div className="border-t border-gray-200 mt-4"></div>
            <div className="mt-4">
              <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="nombre"
                    id="floating_name"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Nombre
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="piso"
                      id="floating_area"
                      value={formData.piso}
                      onChange={handleChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_area"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Piso
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="area"
                      id="floating_floor"
                      value={formData.area}
                      onChange={handleChange}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_floor"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Área
                    </label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-7 group">
                  <input
                    type="email"
                    name="correo"
                    id="floating_email"
                    value={formData.correo}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Correo Electrónico
                  </label>
                </div>
                <div className="relative z-0 w-full mb-8 group">
                  <label
                    htmlFor="comentario"
                    className="block mb-3 text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    Comentario:
                  </label>
                  <textarea
                    id="comentario"
                    name="comentario"
                    value={formData.comentario}
                    onChange={handleChange}
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Descripción de los hechos..."
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <button
                    type="button"
                    className="w-5/12 rounded-lg border border-gray-300 shadow-sm px-5 py-2.5 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:text-sm text-center"
                    onClick={closeModal}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="w-5/12 text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-400"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

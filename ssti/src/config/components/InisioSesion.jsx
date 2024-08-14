import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InicioS from '../../assets/InicioSer.png';
import Logotipo from '../../assets/logo_ssti.png';
import '../../App.css';
import Swal from 'sweetalert2';

function InisioSesion({ setUsuarioGlobal }) {  // <--- Recibe el prop para establecer el usuario global
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/ssti/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, contrasena }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.data.token;
        const userData = data.data.usuario;

        // Guarda el token y los datos del usuario en el localStorage (si es necesario)
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(userData));

        // Establece los datos del usuario en el estado global (prop)
        setUsuarioGlobal(userData);

        Swal.fire({
          icon: 'success',
          title: 'Acceso Permitido',
          text: `¡Bienvenido ${userData.persona.nombre} ${userData.persona.apellido_p} ${userData.persona.apellido_m}!`,
          customClass: {
            title: 'text-xl', 
            content: 'text-lg', 
          },
          showConfirmButton: false,
          timer: 1500,
        });

        navigate('/ssti/tablero', { state: { usuario: userData } });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El nombre de usuario o la contraseña que ingresó no son válidos.',
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
        text: 'Ocurrió un error al intentar iniciar sesión.',
        customClass: {
          title: 'text-xl', 
          content: 'text-lg',
        },
        confirmButtonColor: '#E02424', 
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-teal-100 dark:bg-gray-900 mx-auto">
      <div className="2xl:max-w-7xl xl:max-w-5xl mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-xl md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover rounded-t-lg md:h-auto max-h-full md:w-1/2 md:rounded-none md:rounded-s-lg" src={InicioS} alt="Imágen de Freepik" />
        <div className="flex flex-col justify-between p-10 leading-normal mx-auto">
          <div className="flex flex-col items-center">
            <img className='w-32 xl:w-40 2xl:w-52 mb-11' src={Logotipo} alt="SSTI" />
          </div>
          <form className='max-w-md mx-auto' onSubmit={handleLogin}>
            <div className="relative z-0 w-80 mb-10 group">
              <input 
                type="text" 
                name="floating_usuario" 
                id="floating_usuario" 
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required 
                onChange={(e) => setUsuario(e.target.value)}
              />
              <label htmlFor="floating_usuario" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-9 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9">Nombre de Usuario</label>
            </div>
            <div className="relative z-0 w-80 mb-12 group">
              <input 
                type="password" 
                name="floating_password" 
                id="floating_password" 
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                required 
                onChange={(e) => setContrasena(e.target.value)}
              />
              <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-9 scale-75 top-3 -z-10 origin-[0] left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9">Contraseña</label>
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white hover:bg-teal-600 py-3 mx-auto px-10 mb-4 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg flex items-center self-center text-xl"
            >
              Iniciar Sesión
            </button>
            <a href="">
              <p className='font-bold text-gray-500 md:text-lg dark:text-gray-400'>¿Olvidaste tu Contraseña?</p>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InisioSesion;

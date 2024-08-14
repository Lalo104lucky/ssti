import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Layout from './config/components/Layout.jsx';
import ProblemasComunes from './config/components/ProblemasComunes.jsx';
import './App.css';
import MedidasPreventivas from './config/components/MedidasPreventivas.jsx';
import ScrollToTop from './config/components/ScrollToTop';
import DirectorioExtensiones from './config/components/DirectorioExtensiones.jsx';
import InisioSesion from './config/components/InisioSesion.jsx';
import imagen1 from './assets/imagen1.png';
import imagen2 from './assets/imagen2.png';
import imagen3 from './assets/imagen3.png';
import compu from './assets/compu.png';
import ethernet from './assets/ethernet.png';
import fuente from './assets/fuente.png';
import impresora from './assets/impresora.png';
import nodo from './assets/nodo.png';
import telefo from './assets/telefo.png';
import oficina from './assets/oficina.png';
import medidas from './assets/medidas.png';
import { FaPlusCircle, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import Menu from './config/components/Menu.jsx';
import Modal from './config/components/Modal.jsx';
import Principal from './config/components/Principal.jsx';
import Reportes from './config/components/Reportes.jsx';
import Historial from './config/components/Historial.jsx';
import Directorio from './config/components/Directorio.jsx';


const ServiceCard = ({ imgSrc, title, description, onClick }) => (
  <div onClick={onClick} className="service-card p-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-lg hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer">
    <img className="object-cover w-full rounded-t-lg h-40 md:h-auto md:w-28 md:rounded-none md:rounded-l-lg" src={imgSrc} alt={title} />
    <div className="flex flex-col justify-between p-4 leading-normal md:w-72">
      <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 justify-center">{description}</p>
    </div>
  </div>
);

function App() {
  const [modalContent, setModalContent] = useState(null);
  const moreInfoRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: '', description: '', imgSrc: '' });
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  const scrollToMoreInfo = () => {
    const elementPosition = moreInfoRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - (window.innerHeight * 0.1);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const handleCardClick = ({ title, description, imgSrc }) => {
    setModalData({ title, description, imgSrc });
    setShowModal(true);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home scrollToMoreInfo={scrollToMoreInfo} moreInfoRef={moreInfoRef} handleCardClick={handleCardClick} /></Layout>} />
        <Route path="/problemas-comunes" element={<Layout><ProblemasComunes /></Layout>} />
        <Route path="/medidas-preventivas" element={<Layout><MedidasPreventivas /></Layout>} />
        <Route path="/directorio-extensiones" element={<Layout><DirectorioExtensiones /></Layout>} />
        <Route path="/ssti" element={<InisioSesion setUsuarioGlobal={setUsuarioGlobal} />} />
        <Route path="/ssti/*" element={<Menu usuario={usuarioGlobal} />}>
          <Route path="tablero" element={<Principal usuario={usuarioGlobal} />} />
          <Route path="reportes" element={<Reportes usuario={usuarioGlobal} />} />
          <Route path="directorio" element={<Directorio usuario={usuarioGlobal} />} />
        </Route>
      </Routes>
      {modalContent && <Modal content={modalContent} closeModal={closeModal} />}
      {showModal && <Modal closeModal={() => setShowModal(false)} title={modalData.title} description={modalData.description} imgSrc={modalData.imgSrc} />}
    </Router>
  );
}

const Home = ({ scrollToMoreInfo, moreInfoRef, handleCardClick }) => (
  <>
    <div className="bg-blue-100 mt-20">
      <div className="p-6 rounded-lg flex flex-col md:flex-row items-center flex-grow">
        <div className="md:w-1/2 flex flex-row gap-3 mb-4 md:mb-0 justify-end">
          <img src={imagen1} alt="Trabajo en red" className="rounded-lg object-cover" />
          <div className="flex flex-col gap-2 md:w-2/5">
            <img src={imagen2} alt="Uso de dispositivos electrónicos" className="rounded-lg w-52 object-cover" />
            <img src={imagen3} alt="Interfaz digital" className="rounded-lg w-52 object-cover" />
          </div>
        </div>
        <div className="md:w-8/12 flex flex-col md:items-start md:pl-1 items-center text-section">
          <h2 className="text-3xl md:text-4xl font-bold mt-0 mb-9 text-black">Tecnologías de la Información</h2>
          <p className="text-center md:text-justify mb-9 text-xl text-black flex-grow md:w-11/12">
            Nos aseguramos de que los dispositivos electrónicos, redes y programas funcionen de manera eficiente y estén alineados con las necesidades de la institución. Además, implementamos soluciones proactivas para resolver cualquier incidencia técnica y garantizar la continuidad operativa.
          </p>
          <button
            className="bg-teal-500 text-white hover:bg-teal-600 py-3 px-6 mb-9 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg flex items-center self-center text-xl"
            onClick={scrollToMoreInfo}
          >
            <FaPlusCircle className="mr-3 text-2xl" /> Información Adicional
          </button>
        </div>
      </div>
    </div>

    <div className='bg-green-100 p-5'>
      <div className='flex flex-col'>
        <h2 className="text-2xl md:text-3xl font-bold mt-7 mb-5 text-black">Tipos de Servicios</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        <ServiceCard imgSrc={compu} title="Equipo de Computo" description="Garantizar el óptimo rendimiento y funcionamiento de los equipos informáticos." onClick={() => handleCardClick({ title: "Computadora", description: "Detalles del servicio de Equipo de Computo.", imgSrc: compu })} />
        <ServiceCard imgSrc={impresora} title="Impresoras" description="Gestionar y mantener las impresoras conectadas a la red, incluyendo problemas relacionados." onClick={() => handleCardClick({ title: "Impresora", description: "Detalles del servicio de Impresoras.", imgSrc: impresora })} />
        <ServiceCard imgSrc={telefo} title="Teléfono" description="Facilitar la comunicación de líneas telefónicas para identificar llamadas y mejorar la experiencia del usuario." onClick={() => handleCardClick({ title: "Teléfono", description: "Detalles del servicio de Teléfono.", imgSrc: telefo })} />
        <ServiceCard imgSrc={ethernet} title="Internet" description="Asegurar que las redes funcionen de manera eficiente proporcionando acceso rápido a internet." onClick={() => handleCardClick({ title: "Internet", description: "Detalles del servicio de Internet.", imgSrc: ethernet })} />
        <ServiceCard imgSrc={nodo} title="Nodos" description="Enrutar los paquetes de datos entre nodos para garantizar que lleguen correctamente a su destino." onClick={() => handleCardClick({ title: "Nodo", description: "Detalles del servicio de Nodos.", imgSrc: nodo })} />
        <ServiceCard imgSrc={fuente} title="Regulador de Voltaje" description="Proporcionar energía de respaldo a los equipos durante cortes eléctricos por un tiempo limitado." onClick={() => handleCardClick({ title: "Regulador", description: "Detalles del servicio de Regulador de Voltaje.", imgSrc: fuente })} />
      </div>
    </div>

    <div ref={moreInfoRef} className='bg-yellow-50 flex justify-center common-issues-section'>
      <div className="max-w-6xl p-6 rounded-lg flex flex-col md:flex-row items-center">
        <div className='md:w-1/2 flex flex-col items-center md:items-center text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-9'>Problemas Comunes</h2>
          <p className='text-xl mb-9 text-justify'>
            Proporciona una lista de problemas frecuentes que los usuarios pueden enfrentar. Si encuentran un problema similar al suyo, pueden intentar resolverlo siguiendo las soluciones proporcionadas.
          </p>
          <Link to="/problemas-comunes" className="bg-yellow-400 text-white hover:bg-yellow-500 py-3 px-7 mb-9 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg flex items-center self-center text-xl">
            <FaLightbulb className="mr-2 text-2xl" /> Ver más
          </Link>
        </div>
        <div className='md:w-1/2 flex justify-center'>
          <img src={oficina} alt="Problemas Comunes Imágen de Freepik" className='rounded-lg w-full md:w-auto object-cover' />
        </div>
      </div>
    </div>

    <div className='bg-cyan-50 flex justify-center preventive-measures-section'>
      <div className="max-w-6xl p-6 rounded-lg flex flex-col md:flex-row items-center">
        <div className='md:w-1/2 flex justify-center'>
          <img src={medidas} alt="Problemas Comunes Imágen de Freepik" className='rounded-lg w-full md:w-auto object-cover' />
        </div>
        <div className='md:w-1/2 flex flex-col items-center md:items-center text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-9'>Medidas Preventivas</h2>
          <p className='text-xl mb-9 text-justify'>
            Tiene como objetivo mejorar la confiabilidad y seguridad de los equipos electrónicos. Al seguir estas medidas, los usuarios garantizan un uso más seguro y eficiente de sus dispositivos.
          </p>
          <Link to="/medidas-preventivas" className='bg-blue-500 text-white hover:bg-blue-600 py-3 px-7 mb-9 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg flex items-center self-center text-xl'>
            <FaShieldAlt className='mr-2 text-2xl' /> Ver más
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default App;

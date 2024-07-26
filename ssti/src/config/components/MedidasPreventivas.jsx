import React, { useEffect, useState, useRef } from 'react';
import { FaShieldAlt, FaLaptop, FaPrint, FaPhone, FaWifi, FaPlug } from 'react-icons/fa';
import medida from '../../assets/medidapreventiva.png';
import { initFlowbite } from 'flowbite';
import '../../App.css';
import compu from '../../assets/computadoras.png';
import image11 from '../../assets/imagecompu11.png';
import image12 from '../../assets/imagecompu12.png';
import image13 from '../../assets/imagecompu13.png';
import m_impresora from '../../assets/impresoras_me.png';
import image17 from '../../assets/imageimpre14.png';
import image18 from '../../assets/imageimpre15.png';
import image22 from '../../assets/imageimpre16.png';
import telefono from '../../assets/telefono_me.png';
import image23 from '../../assets/imagetele17.png';
import image24 from '../../assets/imagetele18.png';
import image28 from '../../assets/imagetele19.png';
import nodo_me from '../../assets/nodo_me.png';
import image29 from '../../assets/imagenodo20.png';
import image30 from '../../assets/imagenodo21.png';
import image32 from '../../assets/imagenodo22.png';
import conector_ups from '../../assets/ups_me.png';
import image33 from '../../assets/imageregu23.png';
import image34 from '../../assets/imageregu24.png';
import image37 from '../../assets/imageregu25.png';

function MedidasPreventivas() {
  const [activeAccordion, setActiveAccordion] = useState(["accordion-collapse-body-1"]);
  const moreInfoRef = useRef(null);

  useEffect(() => {
    initFlowbite();
  }, []);

  const toggleAccordion = (targetId) => {
    setActiveAccordion(prev => prev === targetId ? null : targetId);
  };

  const scrollToMoreInfo = () => {
    // Obtén la posición del elemento ref
    const elementPosition = moreInfoRef.current.getBoundingClientRect().top;
  
    // Calcula la posición ajustada restando el desplazamiento adicional deseado
    const offsetPosition = elementPosition + window.scrollY - (window.innerHeight * 0.1);
  
    // Realiza el desplazamiento de una sola vez
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
    {/*Degradado para abajo todo chido  bg-gradient-to-b from-purple-200 */}
      <div className='bg-purple-50 flex justify-center preventive-measures-section'>
        <div className="max-w-6xl p-6 rounded-lg flex flex-col md:flex-row items-center">
          <div className='md:w-1/2 flex justify-center'>
            <img src={medida} alt="Problemas Comunes Imágen de Freepik" className='rounded-lg w-full md:w-auto object-cover' />
          </div>
          <div className='md:w-7/12 flex flex-col items-center md:items-start text-justify md:ml-8'>
            <h2 className='text-2xl md:text-3xl font-bold mb-9'>Medidas Preventivas</h2>
            <p className='text-xl mb-9 text-justify'>
              Las medidas preventivas son acciones que se toman para evitar problemas o daños antes de que sucedan. En el caso de dispositivos electrónicos como computadoras, impresoras y teléfonos, estas medidas ayudan a mantener su funcionamiento óptimo y prolongar su vida útil.
            </p>
            <button onClick={scrollToMoreInfo} className='bg-purple-500 text-white hover:bg-purple-600 py-3 px-7 mb-9 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg flex items-center self-center text-xl'>
              <FaShieldAlt className='mr-2 text-2xl' /> Ver más
            </button>
          </div>
        </div>
      </div>

      <div ref={moreInfoRef} className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-lg font-medium text-center items-center justify-center"
          id="default-styled-tab"
          data-tabs-toggle="#default-styled-tab-content"
          data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
          data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className="p-4 border-b-2 rounded-t-lg flex items-center justify-center"
              id="computo-styled-tab"
              data-tabs-target="#styled-computo"
              type="button"
              role="tab"
              aria-controls="styled-computo"
              aria-selected="false"
            >
              <FaLaptop className="mr-2 text-2xl" />
              Equipos de Cómputo
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="p-4 border-b-2 rounded-t-lg flex items-center justify-center"
              id="impresora-styled-tab"
              data-tabs-target="#styled-impresora"
              type="button"
              role="tab"
              aria-controls="styled-impresora"
              aria-selected="false"
            >
              <FaPrint className="mr-2 text-2xl" />
              Impresoras
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="p-4 border-b-2 rounded-t-lg flex items-center justify-center"
              id="telefono-styled-tab"
              data-tabs-target="#styled-telefono"
              type="button"
              role="tab"
              aria-controls="styled-telefono"
              aria-selected="false"
            >
              <FaPhone className="mr-2 text-2xl" />
              Teléfonos
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="p-4 border-b-2 rounded-t-lg flex items-center justify-center"
              id="nodos-styled-tab"
              data-tabs-target="#styled-nodos"
              type="button"
              role="tab"
              aria-controls="styled-nodos"
              aria-selected="false"
            >
              <FaWifi className="mr-2 text-2xl" />
              Nodos de Internet
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className="p-4 border-b-2 rounded-t-lg flex items-center justify-center"
              id="ups-styled-tab"
              data-tabs-target="#styled-ups"
              type="button"
              role="tab"
              aria-controls="styled-ups"
              aria-selected="false"
            >
              <FaPlug className="mr-2 text-2xl" />
              Regulador de Voltaje
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        <div
          className="hidden p-4 rounded-lg bg-white dark:bg-gray-800"
          id="styled-computo"
          role="tabpanel"
          aria-labelledby="computo-styled-tab"
        >
          <div className="max-w-6xl p-6 rounded-lg flex flex-col md:flex-row items-center mx-auto mb-9">
            <div className="md:w-5/12 flex justify-center h-60">
              <img
                src={compu}
                alt="Problemas Comunes Imágen de Freepik"
                className="rounded-lg w-full md:w-auto object-cover"
              />
            </div>
            <div className="md:w-7/12 md:pl-1 flex flex-col items-left md:items-left text-left mt-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-9 md:text-left">
                Rendimiento Óptimo y Longevidad
              </h2>
              <p className="text-xl mb-9 md:text-justify">
                El mantenimiento preventivo de una computadora es crucial para alargar su vida útil y asegurar un desempeño óptimo, así como predicción de errores, diagnóstico de software, limpieza interna y externa del hardware y desfragmentación de archivos.</p>
            </div>
          </div>

          <div id="accordion-collapse" data-accordion="collapse" className='max-w-7xl mx-auto'>
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-1" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded={activeAccordion === "accordion-collapse-body-1" ? "true" : "false"}
                aria-controls="accordion-collapse-body-1"
                onClick={() => toggleAccordion("accordion-collapse-body-1")}
              >
                <div className="flex items-center gap-3">
                  <img src={image11} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-1" ? 'text-black' : 'text-gray-500'}`}>¿Cómo puedo mantener mi computadora de escritorio segura frente a amenazas en línea?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-1" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-1"
              className={`${activeAccordion === "accordion-collapse-body-1" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-1"
            >

              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Actualiza el software:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Activa las actualizaciones automáticas:</li>
                      <ul className="ps-5 mt-3 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                        <li>Ve a “Configuración” » “Actualización y seguridad” » “Windows Update”.</li>
                        <li>Asegúrate de que las actualizaciones automáticas estén habilitadas.</li>
                      </ul>
                    </ul>
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Mantén actualizado el software antivirus:</li>
                      <ul className="ps-5 mt-3 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                        <li>Actualiza regularmente tu programa antivirus.</li>
                      </ul>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Evita abrir archivos adjuntos sospechosos o hacer clic en enlaces inusuales:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>No abras correos electrónicos o mensajes de remitentes desconocidos.</li>
                      <li>No descargues archivos adjuntos sospechosos.</li>
                      <li>Verifica la URL antes de hacer clic en un enlace.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Navega de manera segura:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Utiliza un navegador seguro como Microsoft Edge:</li>
                      <ul className="ps-5 mt-3 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                        <li>Bloquea sitios web maliciosos y ofrece protección contra phishing.</li>
                        <li>Mantén el navegador actualizado.</li>
                      </ul>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Cuidado con las estafas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Sé cauteloso al recibir correos electrónicos inesperados que soliciten información personal o financiera.</li>
                      <li>No reveles información confidencial por teléfono a menos que estés seguro de la identidad del interlocutor.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-2" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded={activeAccordion === "accordion-collapse-body-2" ? "true" : "false"}
                aria-controls="accordion-collapse-body-2"
                onClick={() => toggleAccordion("accordion-collapse-body-2")}
              >
                <div className="flex items-center gap-3">
                  <img src={image12} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-2" ? 'text-black' : 'text-gray-500'}`}>¿Cuáles son las mejores prácticas para limpiar y mantener mi computadora libre de polvo y suciedad?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-2" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-2"
              className={`${activeAccordion === "accordion-collapse-body-2" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Ubicación y prevención:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Coloca tu computadora en un área limpia y libre de polvo.</li>
                      <li>Utiliza filtros de aire en las ranuras de ventilación para evitar que el polvo entre en el sistema.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Limpieza regular:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Limpia el área donde se encuentra tu computadora para reducir la acumulación de polvo.</li>
                      <li>Realiza una limpieza completa al menos una vez al año.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Herramientas recomendadas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Aire comprimido: Ideal para eliminar el polvo de zonas de difícil acceso.</li>
                      <li>Cepillos suaves y paños de microfibra: Úsalos para limpiar superficies delicadas y las aspas de los ventiladores.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-2 border-gray-200 rounded-b-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-3" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded={activeAccordion === "accordion-collapse-body-3" ? "true" : "false"}
                aria-controls="accordion-collapse-body-3"
                onClick={() => toggleAccordion("accordion-collapse-body-3")}
              >
                <div className="flex items-center gap-3">
                  <img src={image13} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-3" ? 'text-black' : 'text-gray-500'}`}>¿Qué precauciones debo tomar al descargar e instalar software en mi PC?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-3" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-3"
              className={`${activeAccordion === "accordion-collapse-body-3" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div className="p-5 border border-b-2 border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Descarga desde fuentes oficiales:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Siempre descarga programas desde las páginas web oficiales de los desarrolladores.</li>
                      <li>Evita sitios no confiables o de terceros que puedan incluir software malicioso.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Lee los términos y condiciones:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Antes de instalar una aplicación, revisa los mensajes y condiciones que aparecen durante la instalación.</li>
                      <li>Desmarca cualquier opción de instalación adicional que no necesites.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Personaliza la ruta de instalación:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Elige una ubicación adecuada para instalar la aplicación.</li>
                      <li>Evita la instalación en carpetas predeterminadas si prefieres otro directorio.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-impresora"
          role="tabpanel"
          aria-labelledby="impresora-styled-tab"
        >
          <div className="max-w-6xl p-6 rounded-lg flex flex-col md:flex-row items-center mx-auto mb-9">
            <div className="md:w-5/12 flex justify-center h-60">
              <img
                src={m_impresora}
                alt="Problemas Comunes Imágen de Freepik"
                className="rounded-lg w-full md:w-auto object-cover"
              />
            </div>
            <div className="md:w-7/12 md:pl-1 flex flex-col items-left md:items-left text-left mt-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-9 md:text-left">
                Fundamental en la Productividad
              </h2>
              <p className="text-xl mb-9 md:text-justify">
                Para mantener tu impresora funcionando correctamente, recuerda usarla regularmente, mantenerla limpia, no tocar partes internas, airear el papel antes de cargarlo, ubicarla en un lugar fresco y seco, usar cartuchos originales y mantener los controladores actualizados.</p>
            </div>
          </div>

          <div id="accordion-collapse" data-accordion="collapse" className='max-w-7xl mx-auto'>
            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-4" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-4"
                aria-expanded={activeAccordion === "accordion-collapse-body-4" ? "true" : "false"}
                aria-controls="accordion-collapse-body-4"
                onClick={() => toggleAccordion("accordion-collapse-body-4")}
              >
                <div className="flex items-center gap-3">
                  <img src={image17} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-4" ? 'text-black' : 'text-gray-500'}`}>¿Cómo puedo prolongar la vida útil de mi impresora?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-4" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-4"
              className={`${activeAccordion === "accordion-collapse-body-4" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-4"
            >

              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Mantenla limpia:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Evita que el polvo y los residuos de tinta se acumulen. Usa un protector cuando no la utilices.</li>
                      <li>Limpia regularmente el exterior y el interior para evitar obstrucciones.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Utiliza cartuchos recomendados:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Usa cartuchos de tinta y tóner específicos para tu modelo de impresora.</li>
                      <li>No sobrecargues la impresora con papel.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Evita derrames de tinta:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Ten cuidado al reemplazar los cartuchos para evitar derrames.</li>
                      <li>Limpia cualquier derrame inmediatamente.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-5">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-5" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-5"
                aria-expanded={activeAccordion === "accordion-collapse-body-5" ? "true" : "false"}
                aria-controls="accordion-collapse-body-5"
                onClick={() => toggleAccordion("accordion-collapse-body-5")}
              >
                <div className="flex items-center gap-3">
                  <img src={image18} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-5" ? 'text-black' : 'text-gray-500'}`}>¿Cuáles son los pasos para limpiar los cabezales de impresión y evitar obstrucciones?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-5" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-5"
              className={`${activeAccordion === "accordion-collapse-body-5" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-5"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Limpieza desde el software:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Abre el software de tu impresora y busca la opción “Limpieza de cabezales”.</li>
                      <li>La impresora expulsará pequeñas cantidades de tinta para destapar los cabezales obstruidos.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Limpieza manual:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Retira el cartucho de tinta de la impresora.</li>
                      <li>Humedece un paño suave con agua destilada y limpia suavemente los cabezales de impresión.</li>
                      <li>Sécalos con un paño limpio y seco.</li>
                      <li>Vuelve a colocar el cartucho en la impresora.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Si persisten los problemas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Repite el proceso de limpieza varias veces.</li>
                      <li>Si aún no funciona, considera llamar a servicio técnico.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-6">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-2 border-gray-200 rounded-b-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-6" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-6"
                aria-expanded={activeAccordion === "accordion-collapse-body-6" ? "true" : "false"}
                aria-controls="accordion-collapse-body-6"
                onClick={() => toggleAccordion("accordion-collapse-body-6")}
              >
                <div className="flex items-center gap-3">
                  <img src={image22} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-6" ? 'text-black' : 'text-gray-500'}`}>¿Qué medidas de seguridad debo seguir al imprimir documentos confidenciales?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-6" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-6"
              className={`${activeAccordion === "accordion-collapse-body-6" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-6"
            >
              <div className="p-5 border border-b-2 border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Ubicación segura:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Coloca la impresora en un lugar visible para supervisar su actividad.</li>
                      <li>Evita áreas de acceso público.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Protege físicamente la impresora:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si manejas datos confidenciales, asegura la impresora para evitar robos.</li>
                      <li>Algunas impresoras tienen discos duros que almacenan información sensible.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Controla el acceso al papel:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Restringe el acceso al papel, especialmente si usas papel preimpreso de seguridad.</li>
                      <li>Destruye documentos sensibles después de usarlos.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Verifica las características de seguridad del equipo:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que tu impresora admita protocolos de comunicación y cifrado.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-telefono"
          role="tabpanel"
          aria-labelledby="telefono-styled-tab"
        >
          <div className="max-w-6xl p-6 rounded-lg flex flex-col md:flex-row items-center mx-auto mb-9">
            <div className="md:w-5/12 flex justify-center h-60">
              <img
                src={telefono}
                alt="Problemas Comunes Imágen de Freepik"
                className="rounded-lg w-full md:w-auto object-cover"
              />
            </div>
            <div className="md:w-7/12 md:pl-1 flex flex-col items-left md:items-left text-left mt-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-9 md:text-left">
                Optimiza la Durabilidad de la Comunicación
              </h2>
              <p className="text-xl mb-9 md:text-justify">
                Ofrecen una calidad de voz superior en comparación con las llamadas móviles. La conexión estable y la ausencia de interferencias garantizan conversaciones más claras y sin cortes. Además, están diseñados para resistir daños físicos o fallos técnicos.</p>
            </div>
          </div>

          <div id="accordion-collapse" data-accordion="collapse" className='max-w-7xl mx-auto'>
            <h2 id="accordion-collapse-heading-7">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-7" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-7"
                aria-expanded={activeAccordion === "accordion-collapse-body-7" ? "true" : "false"}
                aria-controls="accordion-collapse-body-7"
                onClick={() => toggleAccordion("accordion-collapse-body-7")}
              >
                <div className="flex items-center gap-3">
                  <img src={image23} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-7" ? 'text-black' : 'text-gray-500'}`}>¿Cómo puedes prevenir problemas en tu teléfono fijo?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-7" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-7"
              className={`${activeAccordion === "accordion-collapse-body-7" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-7"
            >

              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Verifica los cables y conexiones:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que los cables estén conectados correctamente tanto en el teléfono como en la toma de la pared.</li>
                      <li>Si tienes varios teléfonos en casa, prueba conectar el teléfono en otra toma para descartar problemas específicos de una conexión.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Regula el volumen del timbre:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Existe un botón para ajustar el volumen del timbre en tu teléfono fijo. Asegúrate de que esté configurado al nivel más alto.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Bloquea llamadas no deseadas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Utiliza el código *60 para bloquear llamadas específicas. Marca *60 seguido del número que deseas bloquear.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-8">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-8" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-8"
                aria-expanded={activeAccordion === "accordion-collapse-body-8" ? "true" : "false"}
                aria-controls="accordion-collapse-body-8"
                onClick={() => toggleAccordion("accordion-collapse-body-8")}
              >
                <div className="flex items-center gap-3">
                  <img src={image24} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-8" ? 'text-black' : 'text-gray-500'}`}>¿Qué medidas tomas al limpiar o manipular el teléfono?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-8" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-8"
              className={`${activeAccordion === "accordion-collapse-body-8" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-8"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Desenchufa y apaga:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Antes de limpiar, desconecta el teléfono y apágalo.</li>
                      <li>Retira el auricular si es posible para limpiarla por separado.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Limpieza con paño de microfibra:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Utiliza un paño de microfibra limpio y seco para eliminar la suciedad, residuos y grasa natural.</li>
                      <li>Evita mojar zonas sensibles como las ranuras o la pantalla.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Mezcla de agua destilada y alcohol isopropílico:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Prepara una solución con agua destilada y alcohol isopropílico al 70% en una botella rociadora pequeña.</li>
                      <li>Rocía el paño con esta mezcla y limpia suavemente el teléfono.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-9">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-2 border-gray-200 rounded-b-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-9" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-9"
                aria-expanded={activeAccordion === "accordion-collapse-body-9" ? "true" : "false"}
                aria-controls="accordion-collapse-body-9"
                onClick={() => toggleAccordion("accordion-collapse-body-9")}
              >
                <div className="flex items-center gap-3">
                  <img src={image28} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-9" ? 'text-black' : 'text-gray-500'}`}>¿Qué debes revisar periódicamente para mantenerlo en buen funcionamiento?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-9" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-9"
              className={`${activeAccordion === "accordion-collapse-body-9" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-9"
            >
              <div className="p-5 border border-b-2 border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Verificación de tonos y llamadas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Realiza una prueba de marcación, llamada y timbrado con otra extensión telefónica cercana.</li>
                      <li>Asegúrate de que todas las teclas del teléfono funcionen correctamente.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Posición del teléfono:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Coloca el teléfono en una posición accesible para facilitar su uso y evitar caídas.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Limpieza superficial:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Limpia la superficie del teléfono con un paño humedecido con agua jabonosa para mantenerlo libre de polvo y suciedad.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-nodos"
          role="tabpanel"
          aria-labelledby="nodos-styled-tab"
        >
          <div className="max-w-6xl p-6 rounded-lg flex flex-col md:flex-row items-center mx-auto mb-9">
            <div className="md:w-5/12 flex justify-center h-60">
              <img
                src={nodo_me}
                alt="Problemas Comunes Imágen de Freepik"
                className="rounded-lg w-full md:w-auto object-cover"
              />
            </div>
            <div className="md:w-7/12 md:pl-1 flex flex-col items-left md:items-left text-left mt-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-9 md:text-left">
                Estabilidad y Rendimiento en Conexiones
              </h2>
              <p className="text-xl mb-9 md:text-justify">
                Para garantizar su funcionamiento óptimo, es esencial aplicar medidas preventivas. Primero, la seguridad protege los nodos contra vulnerabilidades, asegurando la integridad de los datos. Segundo, la estabilidad evita fallos y desconexiones, manteniendo una red confiable.</p>
            </div>
          </div>

          <div id="accordion-collapse" data-accordion="collapse" className='max-w-7xl mx-auto'>
            <h2 id="accordion-collapse-heading-10">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-10" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-10"
                aria-expanded={activeAccordion === "accordion-collapse-body-10" ? "true" : "false"}
                aria-controls="accordion-collapse-body-10"
                onClick={() => toggleAccordion("accordion-collapse-body-10")}
              >
                <div className="flex items-center gap-3">
                  <img src={image29} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-10" ? 'text-black' : 'text-gray-500'}`}>¿Cómo mantener tu conexión y datos actualizados?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-10" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-10"
              className={`${activeAccordion === "accordion-collapse-body-10" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-10"
            >

              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Actualizaciones regulares:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Mantén tus sistemas operativos y programas actualizados con los últimos parches de seguridad.</li>
                      <li>Configura las actualizaciones automáticas para simplificar este proceso.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Contraseñas seguras:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Utiliza contraseñas robustas y cámbialas periódicamente.</li>
                      <li>Considera el uso de un gestor de contraseñas para administrarlas de manera segura.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Copias de seguridad:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Realiza copias de seguridad periódicas de los datos almacenados en tus nodos.</li>
                      <li>Guarda las copias en ubicaciones seguras y fuera de línea.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-11">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-11" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-11"
                aria-expanded={activeAccordion === "accordion-collapse-body-11" ? "true" : "false"}
                aria-controls="accordion-collapse-body-11"
                onClick={() => toggleAccordion("accordion-collapse-body-11")}
              >
                <div className="flex items-center gap-3">
                  <img src={image30} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-11" ? 'text-black' : 'text-gray-500'}`}>¿Qué precauciones se deben tomar al usar redes wifi públicas o privadas?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-11" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-11"
              className={`${activeAccordion === "accordion-collapse-body-11" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-11"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Redes Wi-Fi públicas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li><span className='font-bold'>Verifica la seguridad de la red</span> antes de conectarte. Asegúrate de estar en una red legítima y no una falsa.</li>
                      <li><span className='font-bold'>Evita transacciones financieras</span> o el acceso a información sensible en redes públicas.</li>
                      <li><span className='font-bold'>Usa una VPN (Red Privada Virtual)</span> para cifrar tus datos y proteger tu privacidad.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Redes Wi-Fi privadas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                    <li><span className='font-bold'>Cambia la contraseña predeterminada</span> de tu router Wi-Fi para evitar accesos no autorizados.</li>
                    <li><span className='font-bold'>Habilita el cifrado WPA2 o superior</span> para proteger tus datos en la red doméstica.</li>
                    <li><span className='font-bold'>Actualiza regularmente el firmware</span> de tu router para corregir vulnerabilidades.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-12">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-2 border-gray-200 rounded-b-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-12" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-12"
                aria-expanded={activeAccordion === "accordion-collapse-body-12" ? "true" : "false"}
                aria-controls="accordion-collapse-body-12"
                onClick={() => toggleAccordion("accordion-collapse-body-12")}
              >
                <div className="flex items-center gap-3">
                  <img src={image32} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-12" ? 'text-black' : 'text-gray-500'}`}>¿Cómo puedo hacer copias de seguridad?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-12" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-12"
              className={`${activeAccordion === "accordion-collapse-body-12" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-12"
            >
              <div className="p-5 border border-b-2 border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                  Copia de seguridad en Windows 11 y 10:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Utiliza la herramienta “Copias de seguridad de Windows” para respaldar archivos, temas, configuraciones y aplicaciones en tu cuenta de Microsoft o en OneDrive.</li>
                      <li>Inicia “Copias de seguridad de Windows” desde el menú Inicio y selecciona las carpetas que deseas respaldar.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                  Dispositivos externos:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Conecta un disco duro externo o una unidad USB.</li>
                      <li>Copia manualmente tus archivos importantes a esta unidad.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="styled-ups"
          role="tabpanel"
          aria-labelledby="ups-styled-tab"
        >
          <div className="max-w-6xl p-6 rounded-lg flex flex-col md:flex-row items-center mx-auto mb-9">
            <div className="md:w-5/12 flex justify-center h-60">
              <img
                src={conector_ups}
                alt="Problemas Comunes Imágen de Freepik"
                className="rounded-lg w-full md:w-auto object-cover"
              />
            </div>
            <div className="md:w-7/12 md:pl-1 flex flex-col items-left md:items-left text-left mt-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-9 md:text-left">
              Protección y Eficiencia Energética
              </h2>
              <p className="text-xl mb-9 md:text-justify">
              Al regular el voltaje de manera precisa, estos dispositivos también contribuyen a la eficiencia energética. Reducen el consumo innecesario y ayudan a ahorrar energía, al proteger tus dispositivos electrónicos, aseguran que funcionen correctamente y no se dañen.</p>
            </div>
          </div>

          <div id="accordion-collapse" data-accordion="collapse" className='max-w-7xl mx-auto'>
            <h2 id="accordion-collapse-heading-13">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-13" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-13"
                aria-expanded={activeAccordion === "accordion-collapse-body-13" ? "true" : "false"}
                aria-controls="accordion-collapse-body-13"
                onClick={() => toggleAccordion("accordion-collapse-body-13")}
              >
                <div className="flex items-center gap-3">
                  <img src={image33} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-13" ? 'text-black' : 'text-gray-500'}`}>¿Cuáles son las precauciones al conectar dispositivos a un regulador?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-13" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-13"
              className={`${activeAccordion === "accordion-collapse-body-13" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-13"
            >

              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                  Verifica la compatibilidad:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que los dispositivos que conectarás al regulador sean compatibles en términos de voltaje y corriente.</li>
                      <li>Consulta las especificaciones técnicas de ambos para evitar problemas.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                  Ubicación adecuada:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Coloca el regulador en un lugar fresco y bien ventilado para evitar el sobrecalentamiento.</li>
                      <li>Evita ubicarlo cerca de fuentes de calor o en áreas con alta humedad.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                  Conexiones seguras:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Conecta los cables correctamente siguiendo las indicaciones del fabricante.</li>
                      <li>Verifica la polaridad al conectar los terminales: positivo con positivo y negativo con negativo.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                  Evita sobrecargas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>No conectes más dispositivos de los que el regulador puede manejar.</li>
                      <li>Consulta la capacidad máxima de carga del regulador y no la excedas.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-14">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-14" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-14"
                aria-expanded={activeAccordion === "accordion-collapse-body-14" ? "true" : "false"}
                aria-controls="accordion-collapse-body-14"
                onClick={() => toggleAccordion("accordion-collapse-body-14")}
              >
                <div className="flex items-center gap-3">
                  <img src={image34} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-14" ? 'text-black' : 'text-gray-500'}`}>¿Qué precauciones se deben tomar al usar un regulador?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-14" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-14"
              className={`${activeAccordion === "accordion-collapse-body-14" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-14"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                  Verifica las conexiones:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que todas las conexiones estén firmes y sin desgaste.</li>
                      <li>Inspecciona los cables y terminales regularmente.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                  Limpieza superficial:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Mantén el regulador libre de polvo y suciedad.</li>
                      <li>Limpia la superficie con un paño suave y seco.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                  Revisa la carga:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Verifica que la carga conectada al regulador no exceda su capacidad.</li>
                      <li>Evita sobrecargarlo para prolongar su vida útil.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-15">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-2 border-gray-200 rounded-b-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-15" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-15"
                aria-expanded={activeAccordion === "accordion-collapse-body-15" ? "true" : "false"}
                aria-controls="accordion-collapse-body-15"
                onClick={() => toggleAccordion("accordion-collapse-body-15")}
              >
                <div className="flex items-center gap-3">
                  <img src={image37} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-15" ? 'text-black' : 'text-gray-500'}`}>¿Cómo mantener mi regulador de voltaje en buen estado?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-15" ? 'rotate-0' : 'rotate-180'}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>

            <div
              id="accordion-collapse-body-15"
              className={`${activeAccordion === "accordion-collapse-body-15" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-15"
            >
              <div className="p-5 border border-b-2 border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                  Ubicación adecuada:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Instala el regulador en un lugar fresco y ventilado para evitar el sobrecalentamiento.</li>
                      <li>Verifica que el regulador sea compatible con la capacidad de los equipos a los que se conectará.</li>
                      <li>Conecta el regulador directamente a una toma de corriente, sin usar adaptadores o extensiones.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                  Verifica los indicadores:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Observa los indicadores del regulador. Si notas alguna anomalía, como luces parpadeantes o apagadas, verifica las conexiones y busca posibles problemas.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                  Protege contra sobretensiones:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Utiliza un supresor de sobretensiones en la toma de corriente antes de conectar el regulador.</li>
                      <li>Esto ayudará a protegerlo contra picos de voltaje.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                  Evita la humedad y la exposición al sol:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>No coloques el regulador en áreas húmedas o expuestas directamente al sol.</li>
                      <li>La humedad y el calor pueden afectar su funcionamiento.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MedidasPreventivas

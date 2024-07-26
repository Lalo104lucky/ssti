import React, { useEffect, useState, useRef } from 'react';
import { FaLightbulb, FaLaptop, FaPrint, FaPhone, FaWifi, FaPlug } from 'react-icons/fa';
import problemas from '../../assets/problemas.png';
import { initFlowbite } from 'flowbite';
import '../../App.css';
import compu from '../../assets/compu1.png';
import image11 from '../../assets/image11.png';
import image12 from '../../assets/image12.png';
import image13 from '../../assets/image13.png';
import image14 from '../../assets/image14.png';
import image15 from '../../assets/image15.png';
import image16 from '../../assets/image16.png';
import m_impresora from '../../assets/m_impresora.png';
import image17 from '../../assets/image17.png';
import image18 from '../../assets/image18.png';
import image19 from '../../assets/image19.png';
import image20 from '../../assets/image20.png';
import image21 from '../../assets/image21.png';
import image22 from '../../assets/image22.png';
import telefono from '../../assets/telefono.png';
import image23 from '../../assets/image23.png';
import image24 from '../../assets/image24.png';
import image25 from '../../assets/image25.png';
import image26 from '../../assets/image26.png';
import image27 from '../../assets/image27.png';
import image28 from '../../assets/image28.png';
import nodo_p from '../../assets/nodo_p.png';
import image29 from '../../assets/image29.png';
import image30 from '../../assets/image30.png';
import image31 from '../../assets/image31.png';
import image32 from '../../assets/image32.png';
import conector_ups from '../../assets/conector_ups.png';
import image33 from '../../assets/image33.png';
import image34 from '../../assets/image34.png';
import image35 from '../../assets/image35.png';
import image36 from '../../assets/image36.png';
import image37 from '../../assets/image37.png';

function ProblemasComunes() {
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
      <div className='bg-purple-50 flex justify-center common-issues-section'>
        <div className="max-w-6xl p-6 rounded-lg flex flex-col md:flex-row items-center">
          <div className='md:w-1/2 flex flex-col items-center md:items-start text-justify'>
            <h2 className='text-2xl md:text-3xl font-bold mb-9'>Problemas Comunes</h2>
            <p className='text-xl mb-9 mr-4'>
              Las fallas en equipos electrónicos afectan la eficiencia dentro de la institución. Pueden surgir por sobrecalentamiento, fallas de energía o errores de usuario. Para prevenir y solucionar estos problemas, es crucial hacer copias de seguridad y mantener actualizaciones de seguridad.
            </p>
            <button
              onClick={scrollToMoreInfo}
              className="bg-purple-500 text-white hover:bg-purple-600 py-3 px-7 mb-9 focus:ring-4 focus:outline-none focus:ring-purple-400 font-medium rounded-lg flex items-center self-center text-xl"
            >
              <FaLightbulb className="mr-2 text-2xl" /> Ver más
            </button>
          </div>
          <div className='md:w-1/2 flex justify-center'>
            <img src={problemas} alt="Problemas Comunes" className='rounded-lg w-full md:w-auto object-cover' />
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
                Mejora de la Vida Cotidiana
              </h2>
              <p className="text-xl mb-9 md:text-justify">
                Los equipos electrónicos son fundamentales para mejorar la eficiencia en el trabajo. Además, enriquecen nuestra calidad de vida al permitirnos comunicarnos de manera dinámica e interactiva, y simplifican nuestras tareas diarias.</p>
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
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-1" ? 'text-black' : 'text-gray-500'}`}>¿Por qué no puedo acceder a la página web?</span>
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
                <p className="mb-2 text-gray-900 dark:text-gray-400">Hay diversas razones por las que no se puede acceder a una página web, entre ellas:</p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Reinicia tu conexión a Internet:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>A veces, los problemas de acceso a sitios web pueden deberse a una conexión a Internet interrumpida. Prueba lo siguiente:</li>
                      <ul className="ps-5 mt-3 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                        <li>Desconecta el cable de alimentación de tu router o módem.</li>
                        <li>Espera al menos un minuto.</li>
                        <li>Vuelve a conectar el cable de alimentación.</li>
                        <li>Esto reiniciará tu conexión y podría solucionar el problema.</li>
                      </ul>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Verifica el estado del sitio web:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que el sitio web al que intentas acceder esté funcionando correctamente. Puedes hacerlo de la siguiente manera:</li>
                      <ul className="ps-5 mt-3 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                        <li>Busca el nombre del sitio en un motor de búsqueda (como Google).</li>
                        <li>Si otros usuarios pueden acceder al sitio, es probable que el problema no esté en tu lado.</li>
                      </ul>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Desactiva Psiphon:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si estás utilizando Psiphon para sortear la censura o acceder a sitios bloqueados, intenta desactivarlo temporalmente.</li>
                      <li>Psiphon es una herramienta que te permite acceder a contenido censurado, pero a veces puede interferir con el acceso normal a sitios web.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Desactiva tu VPN:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si estás utilizando una VPN (Red Privada Virtual), intenta desactivarla.</li>
                      <li>Las VPN cifran tus datos y pueden cambiar tu ubicación virtual, lo que a veces puede afectar el acceso a ciertos sitios web.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Reinicia tu equipo de cómputo:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>A veces, simplemente reiniciar tu computadora puede resolver problemas técnicos.</li>
                      <li>Cierra todas las aplicaciones y reinicia tu dispositivo.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Contacta al soporte técnico:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si el problema persiste y no encuentras una solución, comunícate con el soporte técnico.</li>
                      <li>Proporciona detalles específicos sobre el problema y las acciones que has tomado hasta ahora.</li>
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
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-2" ? 'text-black' : 'text-gray-500'}`}>¿Qué debo hacer si no hay internet?</span>
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
                    Reinicia el router y el dispositivo:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Apaga el router y desconéctalo de la corriente eléctrica.</li>
                      <li>Espera al menos un minuto.</li>
                      <li>Vuelve a encender el router.</li>
                      <li>Enciende tu dispositivo.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Verifica la dirección IP en la tarjeta de red:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>En Windows:</li>
                      <ul className="ps-5 mt-3 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                        <li>Abre el “Símbolo del sistema” (puedes buscarlo en el menú Inicio).</li>
                        <li>Escribe<span className='bg-gray-100 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>ipconfig</span>y presiona Enter.</li>
                        <li>Busca la sección “Adaptador de Ethernet” o “Adaptador inalámbrico” y encuentra la dirección IPv4.</li>
                      </ul>
                    </ul>
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>En macOS:</li>
                      <ul className="ps-5 mt-3 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                        <li>Ve a Preferencias del Sistema » Red.</li>
                        <li>Selecciona tu conexión (Wi-Fi o Ethernet) y busca la dirección IP.</li>
                      </ul>
                    </ul>
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>En Linux:</li>
                      <ul className="ps-5 mt-3 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                        <li>Abre una terminal y escribe<span className='bg-gray-100 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>ipconfig</span>o<span className='bg-gray-100 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300'>ip addr</span>.</li>
                        <li>Busca la dirección IP en la sección de tu adaptador de red.</li>
                      </ul>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Revisa el hardware:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Inspecciona los cables Ethernet (UTP) que conectan el router a tu dispositivo.</li>
                      <li>Asegúrate de que los cables estén bien conectados y no estén dañados.</li>
                      <li>Si usas Wi-Fi, verifica que estés dentro del alcance del router.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-3" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded={activeAccordion === "accordion-collapse-body-3" ? "true" : "false"}
                aria-controls="accordion-collapse-body-3"
                onClick={() => toggleAccordion("accordion-collapse-body-3")}
              >
                <div className="flex items-center gap-3">
                  <img src={image13} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-3" ? 'text-black' : 'text-gray-500'}`}>¿Cuál es la causa de la lentitud en mi computadora?</span>
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

              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Reiniciar tu PC:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Haz clic en el botón “Inicio” o presiona la tecla de Windows.</li>
                      <li>Selecciona “Apagar” o “Reiniciar”.</li>
                      <li>Espera a que la computadora se apague y luego enciéndela nuevamente.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Limpiar archivos temporales:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Presiona la tecla de Windows + R para abrir el cuadro de diálogo “Ejecutar”.</li>
                      <li>Escribe “cleanmgr” y presiona Enter.</li>
                      <li>Selecciona la unidad donde deseas liberar espacio (generalmente C:).</li>
                      <li>Haz clic en “Aceptar” y selecciona “Archivos temporales” para eliminarlos.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Analizar en busca de virus y malware:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de tener un buen antivirus instalado (como Windows Defender o Avast).</li>
                      <li>Ejecuta un análisis completo de tu sistema para detectar y eliminar amenazas.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Cerrar aplicaciones en segundo plano:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Presiona Ctrl + Shift + Esc para abrir el Administrador de tareas.</li>
                      <li>Ve a la pestaña “Procesos”.</li>
                      <li>Haz clic con el botón derecho en las aplicaciones que no necesitas y selecciona “Finalizar tarea”.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-4" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-4"
                aria-expanded={activeAccordion === "accordion-collapse-body-4" ? "true" : "false"}
                aria-controls="accordion-collapse-body-4"
                onClick={() => toggleAccordion("accordion-collapse-body-4")}
              >
                <div className="flex items-center gap-3">
                  <img src={image14} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-4" ? 'text-black' : 'text-gray-500'}`}>¿Por qué no enciende la computadora?</span>
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
                    Verifica las conexiones eléctricas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que el cable de alimentación esté correctamente enchufado tanto en la computadora como en la toma de corriente.</li>
                      <li>Si tienes estás usando un regulador de energía, verifica que también esté conectada y encendida.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Interruptor de la fuente de alimentación:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si tienes una computadora de tipo torre (PC de escritorio), busca el interruptor de la fuente de alimentación en la parte trasera de la PC. Asegúrate de que esté en la posición de “encendido”.</li>
                      <li>En el caso de una laptop, verifica que la batería esté cargada o conecta la computadora directamente a la corriente.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Reinicia la PC:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Mantén presionado el botón de encendido durante unos segundos hasta que la computadora se apague por completo.</li>
                      <li>Luego, presiona nuevamente el botón de encendido para reiniciarla.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Reinicia el monitor:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Apaga el monitor y desconéctalo de la corriente.</li>
                      <li>Espera unos minutos y vuelve a conectarlo.</li>
                      <li>Enciende el monitor para ver si se solucionó el problema.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Comprueba la configuración de entrada:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que el cable de video (HDMI, DisplayPort, VGA, etc.) esté correctamente conectado tanto al monitor como al dispositivo (PC, laptop, etc.).</li>
                      <li>Si tienes varios puertos de entrada en el monitor, verifica que esté seleccionado el correcto.</li>
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
                  <img src={image15} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-5" ? 'text-black' : 'text-gray-500'}`}>¿Por qué mi ratón o teclado no está funcionando correctamente?</span>
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
                    Verifica las conexiones físicas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que los cables estén correctamente conectados tanto para el ratón como para el teclado. Si es inalámbrico, verifica las baterías o la conexión Bluetooth.</li>
                      <li>Si es un teclado o ratón USB, prueba a conectarlos en diferentes puertos USB.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Reinicia tu computadora:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Apaga la computadora y espera unos segundos.</li>
                      <li>Enciéndela nuevamente y verifica si el ratón y el teclado funcionan correctamente.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Revisa las teclas de bloqueo:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que las teclas de bloqueo (como Caps Lock o Num Lock) no estén activadas accidentalmente.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Limpia el ratón o el teclado:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>A veces, la suciedad o el polvo pueden afectar el funcionamiento. Limpia las teclas o los botones con cuidado.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Actualiza los controladores:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Ve al “Administrador de dispositivos” (puedes buscarlo en el menú Inicio).</li>
                      <li>Busca la sección “Ratones y otros dispositivos señaladores” y “Teclados”.</li>
                      <li>Haz clic derecho en cada dispositivo y selecciona “Actualizar controlador”. Siempre es bueno tener los controladores actualizados.</li>
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
                  <img src={image16} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-6" ? 'text-black' : 'text-gray-500'}`}>¿Cuál es el procedimiento para actualizar la licencia de mi Office?</span>
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
                    Abrir una aplicación de Office (por ejemplo, Word):
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Inicia cualquier aplicación de Office, como Word, Excel o PowerPoint.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Acceder a la sección de Cuenta:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>En la parte superior, busca la pestaña o menú llamado “Cuenta” o “Cuenta de usuario”.</li>
                      <li>En algunas versiones de Office, puedes encontrarlo haciendo clic en “Archivo” y luego seleccionando “Cuenta”.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Actualizar la licencia:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Dentro de la sección de Cuenta, busca la opción que dice “Actualizar licencia” o algo similar.</li>
                      <li>Haz clic en esa opción para continuar.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Ingresar tus credenciales:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Se te pedirá que ingreses tu usuario y contraseña asociados con la cuenta de Office.</li>
                      <li>Proporciona la información requerida y sigue las instrucciones.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Confirmar la actualización:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Una vez que hayas ingresado tus credenciales, el sistema verificará y actualizará la licencia.</li>
                      <li>Deberías recibir una confirmación de que la licencia se ha actualizado correctamente.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Reiniciar las aplicaciones de Office:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Cierra todas las aplicaciones de Office y vuelve a abrirlas.</li>
                      <li>Asegúrate de que las actualizaciones se apliquen correctamente.</li>
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
                Fundamental para Mejorar la Experiencia
              </h2>
              <p className="text-xl mb-9 md:text-justify">
                Las impresoras ofrecen la posibilidad de conectarse a la nube, lo que facilita la impresión directamente desde archivos almacenados en línea. Además, su interfaz intuitiva y facilidad de uso son esenciales para mantener la productividad y la comunicación fluida.</p>
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
                  <img src={image17} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-7" ? 'text-black' : 'text-gray-500'}`}>¿Por qué me indica un error la impresora?</span>
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
                <p className="mb-2 text-gray-900 dark:text-gray-400">Cuando la impresora muestra un estado de error, puede haber varios motivos detrás de este problema:</p>
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Desenchufa y reinicia la impresora:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Apaga la impresora y desconéctala de la alimentación.</li>
                      <li>Espera unos segundos y vuelve a encenderla.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Revisa los cables o la conexión inalámbrica:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que los cables estén correctamente conectados o verifica la conexión Wi-Fi si es una impresora inalámbrica.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Desinstala y reinstala la impresora:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Desde la configuración de Windows, busca la impresora y desinstálala.</li>
                      <li>Luego, reinstálala siguiendo las instrucciones del fabricante o del área de Tecnologías de la Información.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Borra y restablece la cola de impresión:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Ve a la configuración de impresoras y busca la cola de impresión.</li>
                      <li>Borra los trabajos pendientes y reinicia la cola.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Cambia el estado de la impresora a “en línea”:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si la impresora aparece como “sin conexión”, verifica si puedes cambiar su estado a “en línea”.</li>
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
                  <img src={image18} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-8" ? 'text-black' : 'text-gray-500'}`}>¿Cómo puedo resolver un atasco de papel en mi impresora?</span>
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
                    Eliminar el atasco actual:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Antes de abordar el problema generalizado, asegúrate de eliminar cualquier papel atascado en ese momento.</li>
                      <li>Cancela cualquier trabajo de impresión en curso y retira el papel atascado.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Tirar suavemente del papel:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si puedes acceder al papel desde la salida de la impresora, tira suavemente pero de manera sostenida para liberarlo.</li>
                      <li>Evita rasgar el papel, ya que esto podría empeorar el atasco.</li>
                      <li>Realiza esto con la impresora apagada y desconectada de la alimentación.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Verificar la tapa de la impresora:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Algunas impresoras tienen una tapa que permite acceder al área de los cartuchos de tinta o tóner.</li>
                      <li>Abre la tapa y verifica si hay papel atascado o algún objeto obstruyendo el camino.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-9">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-9" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-9"
                aria-expanded={activeAccordion === "accordion-collapse-body-9" ? "true" : "false"}
                aria-controls="accordion-collapse-body-9"
                onClick={() => toggleAccordion("accordion-collapse-body-9")}
              >
                <div className="flex items-center gap-3">
                  <img src={image19} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-9" ? 'text-black' : 'text-gray-500'}`}>¿Por qué mi impresora arruga el papel?</span>
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

              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Verifica el papel:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de usar papel seco y sin abarquillar.</li>
                      <li>Utiliza papel compatible con tu impresora en términos de gramaje y tamaño.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Comprueba el recorrido del papel:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Vacía las bandejas de entrada y salida de papel.</li>
                      <li>Limpia las bandejas para eliminar suciedad o restos de papel.</li>
                      <li>Verifica que no haya obstrucciones en el recorrido del papel.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Limpia los rodillos:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si los rodillos están sucios, límpialos con un paño suave y seco.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Carga el papel correctamente:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Apila el papel de forma alineada en la bandeja.</li>
                      <li>No sobrecargues la bandeja y asegúrate de que esté bien colocada.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Realiza una página de prueba:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Imprime una página de prueba para verificar si el problema persiste.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-10">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-10" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-10"
                aria-expanded={activeAccordion === "accordion-collapse-body-10" ? "true" : "false"}
                aria-controls="accordion-collapse-body-10"
                onClick={() => toggleAccordion("accordion-collapse-body-10")}
              >
                <div className="flex items-center gap-3">
                  <img src={image20} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-10" ? 'text-black' : 'text-gray-500'}`}>¿Por qué mi impresora no está imprimiendo mi documento?</span>
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
                    Verifica la conexión y encendido:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que la impresora esté correctamente enchufada y encendida.</li>
                      <li>Verifica los cables de conexión (USB o red) entre la impresora y la computadora.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Comprueba el nivel de tinta:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Verifica si los cartuchos de tinta tienen suficiente tinta para imprimir.</li>
                      <li>Si es necesario, reemplaza los cartuchos vacíos o casi agotados.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Reinicia la impresora:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Apaga la impresora y desconéctala de la alimentación.</li>
                      <li>Espera unos segundos y vuelve a encenderla.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Verifica la cola de impresión:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Abre la cola de impresión en tu computadora y verifica si hay trabajos pendientes o atascados.</li>
                      <li>Cancela cualquier trabajo de impresión en espera.</li>
                      <li>Enciende el monitor para ver si se solucionó el problema.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Ejecuta el solucionador de problemas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>En Windows, busca “solucionador de problemas” en el menú Inicio y selecciona “Solucionar problemas de impresión”.</li>
                      <li>Sigue las instrucciones para detectar y resolver problemas comunes.</li>
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
                  <img src={image21} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-11" ? 'text-black' : 'text-gray-500'}`}>¿Por qué mi impresora está imprimiendo el documento de forma difuminada?</span>
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
                    Verifica el papel:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de usar papel seco y sin abarquillar.</li>
                      <li>Utiliza papel compatible con tu impresora en términos de gramaje y tamaño.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Comprueba el recorrido del papel:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Vacía las bandejas de entrada y salida de papel.</li>
                      <li>Limpia las bandejas para eliminar suciedad o restos de papel.</li>
                      <li>Verifica que no haya obstrucciones en el recorrido del papel.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Limpia los rodillos:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si los rodillos están sucios, límpialos con un paño suave y seco.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Carga el papel correctamente:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Apila el papel de forma alineada en la bandeja.</li>
                      <li>No sobrecargues la bandeja y asegúrate de que esté bien colocada.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Verifica los niveles de tinta:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que los cartuchos de tinta tengan suficiente tinta para imprimir.</li>
                      <li>Si es necesario, reemplaza los cartuchos vacíos o casi agotados.</li>
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
                  <img src={image22} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-12" ? 'text-black' : 'text-gray-500'}`}>¿Por qué mi impresora no imprime en el tamaño deseado?</span>
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
                    Ajusta el tamaño del papel:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>En el panel de control de la impresora, busca la opción para configurar el tamaño del papel.</li>
                      <li>Selecciona el tamaño correcto de papel que estás utilizando (por ejemplo, carta, legal, A4, etc.).</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Verifica la bandeja de papel:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que la bandeja de papel esté cargada con el tamaño de papel correcto.</li>
                      <li>Ajusta las guías de la bandeja para que se ajusten al tamaño del papel.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Configura la calidad de impresión:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>En el menú de configuración de la impresora, busca opciones relacionadas con la calidad de impresión.</li>
                      <li>Ajusta la calidad según tus preferencias (borrador, normal, alta calidad, etc.).</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Calibra la impresora:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Algunas impresoras tienen una función de calibración o alineación.</li>
                      <li>Busca esta opción en el menú y sigue las instrucciones para calibrar la impresora.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Realiza una prueba de impresión:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Imprime una página de prueba para verificar que la configuración sea la correcta.</li>
                      <li>Si la impresión no es nítida o el tamaño no es el esperado, revisa nuevamente los pasos anteriores.</li>
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
                Eficaz para Comunicaciones Estables
              </h2>
              <p className="text-xl mb-9 md:text-justify">
                En contextos institucionales, la utilización de teléfonos fijos puede ser beneficiosa para agilizar tareas y permitir que los trabajadores operen de manera remota con mayor seguridad. Además ofrecen una conexión estable y confiable.                </p>
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
                  <img src={image23} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-13" ? 'text-black' : 'text-gray-500'}`}>¿Por qué no se realiza ninguna llamada?</span>
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
                    Verifica el bloqueo de números:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Algunos teléfonos fijos tienen una función de bloqueo de llamadas que puede impedir que realices llamadas a ciertos números.</li>
                      <li>Revisa la configuración de llamadas de tu teléfono y asegúrate de que no hayas activado accidentalmente esta función.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Comprueba la señal y la línea telefónica:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que la línea telefónica esté conectada correctamente al teléfono fijo.</li>
                      <li>Verifica si hay problemas de señal o interrupciones en la línea.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Prueba con otro teléfono o línea:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Conecta otro teléfono fijo o utiliza una línea diferente para descartar problemas específicos con el dispositivo actual.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Contacta al soporte técnico:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si el problema persiste y no encuentras una solución, comunícate con el soporte técnico de tu proveedor de servicios telefónicos o con el fabricante del teléfono fijo.</li>
                      <li>Proporciona detalles específicos sobre el problema y las acciones que has tomado hasta ahora.</li>
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
                  <img src={image24} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-14" ? 'text-black' : 'text-gray-500'}`}>¿Por qué se produce interferencia en una llamada?</span>
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
                    Congestión de redes y señales débiles:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>En áreas con muchas personas usando sus teléfonos al mismo tiempo, las redes pueden saturarse, causando interferencias.</li>
                      <li>Solución: Intenta llamar en horarios menos congestionados o busca una zona con mejor señal.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Obstrucciones y materiales de construcción:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Paredes gruesas, metal o madera pueden bloquear la señal.</li>
                      <li>Solución: Ubica tu teléfono cerca de una ventana o en un lugar con menos obstrucciones.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Clima y agua:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>La lluvia y el agua debilitan las señales de las torres de telefonía.</li>
                      <li>Solución: Si estás en exteriores, busca un lugar más protegido.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Configuración del teléfono:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Algunos teléfonos inalámbricos pueden generar interferencias.</li>
                      <li>Solución: Verifica si hay otros dispositivos electrónicos cerca del teléfono y ajústalos.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-15">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-15" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-15"
                aria-expanded={activeAccordion === "accordion-collapse-body-15" ? "true" : "false"}
                aria-controls="accordion-collapse-body-15"
                onClick={() => toggleAccordion("accordion-collapse-body-15")}
              >
                <div className="flex items-center gap-3">
                  <img src={image25} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-15" ? 'text-black' : 'text-gray-500'}`}>¿Por qué está apagado el teléfono?</span>
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

              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Verifica la conexión y la alimentación:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que el teléfono esté correctamente conectado a la línea telefónica y al enchufe de alimentación.</li>
                      <li>Verifica que el cable de teléfono esté en buen estado y conectado correctamente.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Revisa los cables y conectores:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Verifica que los cables e interfaces estén conectados correctamente al teléfono fijo y a la toma de pared.</li>
                      <li>Asegúrate de que no haya daños en los cables.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Comprueba el volumen del timbre:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Existe un botón en el teléfono para regular el volumen del timbre.</li>
                      <li>Asegúrate de que esté ajustado al nivel más alto.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Verifica la línea telefónica:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si tienes otros teléfonos en la misma línea, verifica si funcionan correctamente.</li>
                      <li>Si es necesario, comunícate con soporte técnico para verificar la línea.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Reinicia el teléfono:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Desconecta el teléfono de la alimentación y espera unos segundos.</li>
                      <li>Vuelve a conectarlo y enciéndelo.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-16">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-16" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-16"
                aria-expanded={activeAccordion === "accordion-collapse-body-16" ? "true" : "false"}
                aria-controls="accordion-collapse-body-16"
                onClick={() => toggleAccordion("accordion-collapse-body-16")}
              >
                <div className="flex items-center gap-3">
                  <img src={image26} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-16" ? 'text-black' : 'text-gray-500'}`}>¿Por qué la bocina del teléfono no está funcionando correctamente?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-16" ? 'rotate-0' : 'rotate-180'}`}
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
              id="accordion-collapse-body-16"
              className={`${activeAccordion === "accordion-collapse-body-16" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-16"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Verifica el volumen del timbre:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que el volumen del timbre esté configurado correctamente.</li>
                      <li>Si es demasiado bajo, ajústalo al nivel más alto.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Reinicia el teléfono:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Desconecta el teléfono de la alimentación eléctrica y espera unos segundos.</li>
                      <li>Vuelve a conectarlo y enciéndelo.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Comprueba los cables y conectores:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Verifica que los cables e interfaces estén conectados correctamente al teléfono fijo y a la toma de pared.</li>
                      <li>Luego, presiona nuevamente el botón de encendido para reiniciarla.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Prueba con otro teléfono o línea:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si tienes acceso a otro teléfono fijo o a una línea diferente, prueba con él para descartar problemas específicos con el dispositivo actual.</li>
                      <li>Espera unos minutos y vuelve a conectarlo.</li>
                      <li>Enciende el monitor para ver si se solucionó el problema.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-17">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-17" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-17"
                aria-expanded={activeAccordion === "accordion-collapse-body-17" ? "true" : "false"}
                aria-controls="accordion-collapse-body-17"
                onClick={() => toggleAccordion("accordion-collapse-body-17")}
              >
                <div className="flex items-center gap-3">
                  <img src={image27} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-17" ? 'text-black' : 'text-gray-500'}`}>¿Por qué el dispositivo muestra "Discovery" o "Sin señal"?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-17" ? 'rotate-0' : 'rotate-180'}`}
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
              id="accordion-collapse-body-17"
              className={`${activeAccordion === "accordion-collapse-body-17" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-17"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Verifica las conexiones físicas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que los cables estén correctamente conectados en ambos extremos (teléfono y toma de pared).</li>
                      <li>Inspecciona si hay daños en los cables o conectores.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Reinicia el teléfono:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Apaga el teléfono y vuelve a encenderlo.</li>
                      <li>Si tienes varios teléfonos, prueba reiniciar todos.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Comprueba la línea telefónica:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si es posible, conecta otro teléfono en la misma toma para verificar si también muestra el mismo problema.</li>
                      <li>Si el otro teléfono funciona correctamente, podría ser un problema específico con el dispositivo.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-18">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-2 border-gray-200 rounded-b-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-18" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-18"
                aria-expanded={activeAccordion === "accordion-collapse-body-18" ? "true" : "false"}
                aria-controls="accordion-collapse-body-18"
                onClick={() => toggleAccordion("accordion-collapse-body-18")}
              >
                <div className="flex items-center gap-3">
                  <img src={image28} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-18" ? 'text-black' : 'text-gray-500'}`}>¿Cómo activo el modo de silencio?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-18" ? 'rotate-0' : 'rotate-180'}`}
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
              id="accordion-collapse-body-18"
              className={`${activeAccordion === "accordion-collapse-body-18" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-18"
            >
              <div className="p-5 border border-b-2 border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Busca el botón de silencio:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Examina el teléfono en busca de un botón etiquetado como “Silencio” o con un ícono similar. Por lo general, está cerca del teclado o en la parte frontal del dispositivo.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Presiona el botón de silencio:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Una vez que encuentres el botón, presiónalo. Esto activará el modo de silencio y deberías ver una indicación en la pantalla (si tu teléfono tiene una).</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Para desactivar el silencio:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si deseas volver al modo normal, simplemente presiona nuevamente el botón de silencio.</li>
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
                src={nodo_p}
                alt="Problemas Comunes Imágen de Freepik"
                className="rounded-lg w-full md:w-auto object-cover"
              />
            </div>
            <div className="md:w-7/12 md:pl-1 flex flex-col items-left md:items-left text-left mt-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-9 md:text-left">
                Esenciales para Establecer Conexiones
              </h2>
              <p className="text-xl mb-9 md:text-justify">
                Los cables UTP (par trenzado sin apantallar) se utilizan para conectar dispositivos dentro de un mismo segmento de red, transmitiendo datos de manera confiable y eficiente, permitiendo la comunicación entre computadoras, impresoras, enrutadores, entre otros.</p>
            </div>
          </div>

          <div id="accordion-collapse" data-accordion="collapse" className='max-w-7xl mx-auto'>
            <h2 id="accordion-collapse-heading-19">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-19" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-19"
                aria-expanded={activeAccordion === "accordion-collapse-body-19" ? "true" : "false"}
                aria-controls="accordion-collapse-body-19"
                onClick={() => toggleAccordion("accordion-collapse-body-19")}
              >
                <div className="flex items-center gap-3">
                  <img src={image29} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-19" ? 'text-black' : 'text-gray-500'}`}>¿Qué hago si el cable está dañado?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-19" ? 'rotate-0' : 'rotate-180'}`}
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
              id="accordion-collapse-body-19"
              className={`${activeAccordion === "accordion-collapse-body-19" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-19"
            >

              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Reemplaza el cable:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Consigue un cable Ethernet nuevo de buena calidad.</li>
                      <li>Asegúrate de que sea de la longitud adecuada para tu configuración.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Verifica los conectores:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Inspecciona los conectores en ambos extremos del cable.</li>
                      <li>Si ves daños, como pines doblados o rotos, es probable que necesites un nuevo cable.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Evita doblar el cable en ángulos agudos:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Doblajes excesivos pueden dañar los hilos internos del cable.</li>
                      <li>Mantén el cable lo más recto posible.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Protege el cable de tirones y aplastamientos:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Evita que el cable quede atrapado debajo de muebles o puertas.</li>
                      <li>No tires bruscamente del cable al desconectarlo.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-20">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-20" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-20"
                aria-expanded={activeAccordion === "accordion-collapse-body-20" ? "true" : "false"}
                aria-controls="accordion-collapse-body-20"
                onClick={() => toggleAccordion("accordion-collapse-body-20")}
              >
                <div className="flex items-center gap-3">
                  <img src={image30} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-20" ? 'text-black' : 'text-gray-500'}`}>¿Qué hago si los indicadores LED no se encienden?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-20" ? 'rotate-0' : 'rotate-180'}`}
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
              id="accordion-collapse-body-20"
              className={`${activeAccordion === "accordion-collapse-body-20" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-20"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Actualiza los controladores:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Abre el Administrador de dispositivos en tu PC (puedes buscarlo en el menú Inicio).</li>
                      <li>Busca la sección “Adaptadores de red” y verifica si hay algún triángulo amarillo o signo de exclamación junto a la tarjeta de red.</li>
                      <li>Si es así, haz clic derecho en la tarjeta y selecciona “Actualizar controlador” para buscar actualizaciones.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Reinicia tu computadora:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>A veces, un reinicio simple puede solucionar problemas de conexión.</li>
                      <li>Apaga tu computadora, espera unos segundos y vuelve a encenderla.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Prueba en otra computadora o puerto:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Conecta el cable Ethernet a otra computadora o a un puerto diferente en la misma computadora.</li>
                      <li>Esto ayudará a determinar si el problema está en la computadora o en el cable.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-21">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-21" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-21"
                aria-expanded={activeAccordion === "accordion-collapse-body-21" ? "true" : "false"}
                aria-controls="accordion-collapse-body-21"
                onClick={() => toggleAccordion("accordion-collapse-body-21")}
              >
                <div className="flex items-center gap-3">
                  <img src={image31} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-21" ? 'text-black' : 'text-gray-500'}`}>¿Por qué se pierde la señal del internet?                  </span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-21" ? 'rotate-0' : 'rotate-180'}`}
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
              id="accordion-collapse-body-21"
              className={`${activeAccordion === "accordion-collapse-body-21" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-21"
            >

              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Problemas con el operador de Internet:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si tu conexión suele funcionar bien pero de repente falla, podría ser un problema puntual con tu proveedor de servicios de Internet (ISP).</li>
                      <li>Realiza un test de velocidad para verificar si la conexión es más lenta de lo normal.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Reinicia el teléfono:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Apaga y enciende el teléfono para solucionar posibles procesos “enganchados”.</li>
                      <li>Si el problema persiste, llame a servicio técnico.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Problemas con el cable del router:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que el cable Ethernet no esté dañado.</li>
                      <li>Siempre es útil reiniciar el router para descartar problemas temporales.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Obstáculos físicos:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Los obstáculos entre el router y tus dispositivos pueden afectar la señal.</li>
                      <li>Coloca el router en un lugar central y sin interferencias para mejorar la intensidad de la señal.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-22">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-2 border-gray-200 rounded-b-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-22" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-22"
                aria-expanded={activeAccordion === "accordion-collapse-body-22" ? "true" : "false"}
                aria-controls="accordion-collapse-body-22"
                onClick={() => toggleAccordion("accordion-collapse-body-22")}
              >
                <div className="flex items-center gap-3">
                  <img src={image32} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-22" ? 'text-black' : 'text-gray-500'}`}>¿Cómo evitar interferencias en cables UTP?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-22" ? 'rotate-0' : 'rotate-180'}`}
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
              id="accordion-collapse-body-22"
              className={`${activeAccordion === "accordion-collapse-body-22" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-22"
            >
              <div className="p-5 border border-b-2 border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Separa cables de señal y alimentación:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Mantén los cables de señal (como los UTP) alejados de los cables de alimentación eléctrica.</li>
                      <li>Evita que se crucen o estén cerca para reducir la interferencia.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Enrutamiento cuidadoso:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Aleja el cableado UTP de fuentes de EMI (interferencia electromagnética), como variadores de frecuencia o soldadoras.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Considera el uso de cables blindados:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Los cables blindados (STP) ofrecen una mayor protección contra interferencias.</li>
                      <li>Si estás en un entorno propenso a ruido electromagnético, considera usar cables STP.</li>
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
                Protección y Continuidad del Trabajo
              </h2>
              <p className="text-xl mb-9 md:text-justify">
                Es esencial para preservar la integridad de los equipos y garantizar la continuidad de las operaciones. Estos dispositivos proporcionan baterías de respaldo que permiten seguir trabajando incluso durante apagones imprevistos.</p>
            </div>
          </div>

          <div id="accordion-collapse" data-accordion="collapse" className='max-w-7xl mx-auto'>
            <h2 id="accordion-collapse-heading-23">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-23" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-23"
                aria-expanded={activeAccordion === "accordion-collapse-body-23" ? "true" : "false"}
                aria-controls="accordion-collapse-body-23"
                onClick={() => toggleAccordion("accordion-collapse-body-23")}
              >
                <div className="flex items-center gap-3">
                  <img src={image33} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-23" ? 'text-black' : 'text-gray-500'}`}>¿Por qué no se encienden los indicadores LED?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-23" ? 'rotate-0' : 'rotate-180'}`}
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
              id="accordion-collapse-body-23"
              className={`${activeAccordion === "accordion-collapse-body-23" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-23"
            >

              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Conexión de los LEDs:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que los cables de los LEDs estén conectados correctamente en la placa del regulador.</li>
                      <li>Verifica que los cables estén en los lugares correctos según el circuito.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Problemas con el regulador:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Comprueba si el regulador de voltaje está funcionando bien.</li>
                      <li>Observa si hay daños en los componentes cerca de los LEDs, como resistencias o transistores.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Voltaje insuficiente:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si el voltaje de entrada al regulador es muy bajo, los LEDs no se encenderán.</li>
                      <li>Verifica que el regulador esté recibiendo la tensión adecuada.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    LEDs dañados:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si los LEDs se han quemado antes, es posible que necesites reemplazarlos.</li>
                      <li>Inspecciona visualmente los LEDs para asegurarte de que estén en buen estado y sin daños físicos.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-24">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-24" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-24"
                aria-expanded={activeAccordion === "accordion-collapse-body-24" ? "true" : "false"}
                aria-controls="accordion-collapse-body-24"
                onClick={() => toggleAccordion("accordion-collapse-body-24")}
              >
                <div className="flex items-center gap-3">
                  <img src={image34} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-24" ? 'text-black' : 'text-gray-500'}`}>¿Por qué suena continuamente la alarma en el regulador?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-24" ? 'rotate-0' : 'rotate-180'}`}
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
              id="accordion-collapse-body-24"
              className={`${activeAccordion === "accordion-collapse-body-24" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-24"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Voltaje inestable:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>El regulador de voltaje siempre está atento al voltaje de entrada.</li>
                      <li>Si nota fluctuaciones excesivas (ya sea muy alto o muy bajo), activa una alarma para proteger tus dispositivos.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Sobrecarga o cortocircuito:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si la carga conectada supera la capacidad del regulador, se activa la alarma.</li>
                      <li>Verifica si hay dispositivos defectuosos o conexiones incorrectas.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Fallas internas:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si hay componentes dañados o funcionamiento incorrecto, también puede activarse la alarma.</li>
                      <li>Considera revisar el regulador o consultar a un técnico.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-25">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-25" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-25"
                aria-expanded={activeAccordion === "accordion-collapse-body-25" ? "true" : "false"}
                aria-controls="accordion-collapse-body-25"
                onClick={() => toggleAccordion("accordion-collapse-body-25")}
              >
                <div className="flex items-center gap-3">
                  <img src={image35} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-25" ? 'text-black' : 'text-gray-500'}`}>¿Por qué no se enciende aunque esté conectado?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-25" ? 'rotate-0' : 'rotate-180'}`}
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
              id="accordion-collapse-body-25"
              className={`${activeAccordion === "accordion-collapse-body-25" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-25"
            >

              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Sobrecarga o falla interna:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Verifica si el regulador está sobrecargado. Tócalo con cuidado; si está caliente, podría indicar una sobrecarga.</li>
                      <li>Si escuchas ruidos o zumbidos cerca del regulador, podría estar fallando.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Falta de energía:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que el regulador esté conectado correctamente y reciba energía.</li>
                      <li>Si sigue sin encender, podría estar defectuoso.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Voltaje de salida incorrecto:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>El regulador debería mantener un voltaje de salida constante. Si cambia, podría estar dañado.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-26">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-26" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-26"
                aria-expanded={activeAccordion === "accordion-collapse-body-26" ? "true" : "false"}
                aria-controls="accordion-collapse-body-26"
                onClick={() => toggleAccordion("accordion-collapse-body-26")}
              >
                <div className="flex items-center gap-3">
                  <img src={image36} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-26" ? 'text-black' : 'text-gray-500'}`}>¿Por qué no funciona el modo de respaldo?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-26" ? 'rotate-0' : 'rotate-180'}`}
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
              id="accordion-collapse-body-26"
              className={`${activeAccordion === "accordion-collapse-body-26" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-26"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Batería agotada o dañada:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Verifica si la batería de respaldo está en buen estado.</li>
                      <li>Si es antigua o no retiene carga, podría ser necesario reemplazarla.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Sobrecarga o falla interna:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si la carga conectada supera la capacidad del regulador, el modo de respaldo no funcionará correctamente.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Configuración incorrecta:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Revisa la configuración del regulador. Algunos modelos requieren activar manualmente el modo de respaldo.</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-27">
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-2 border-gray-200 rounded-b-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800 gap-3 ${activeAccordion === "accordion-collapse-body-27" ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                data-accordion-target="#accordion-collapse-body-27"
                aria-expanded={activeAccordion === "accordion-collapse-body-27" ? "true" : "false"}
                aria-controls="accordion-collapse-body-27"
                onClick={() => toggleAccordion("accordion-collapse-body-27")}
              >
                <div className="flex items-center gap-3">
                  <img src={image37} alt="" className='h-10 w-auto' />
                  <span className={`text-xl ${activeAccordion === "accordion-collapse-body-27" ? 'text-black' : 'text-gray-500'}`}>¿Por qué no puedo conectar una impresora al regulador de voltaje?</span>
                </div>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 transition-transform duration-300 transform ${activeAccordion === "accordion-collapse-body-27" ? 'rotate-0' : 'rotate-180'}`}
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
              id="accordion-collapse-body-27"
              className={`${activeAccordion === "accordion-collapse-body-27" ? 'block' : 'hidden'}`}
              aria-labelledby="accordion-collapse-heading-27"
            >
              <div className="p-5 border border-b-2 border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900 text-justify">
                <ol className="space-y-4 list-decimal list-inside">
                  <li className="text-black font-bold">
                    Verifica la Capacidad del Regulador:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Asegúrate de que el regulador de voltaje tenga suficiente capacidad para manejar la carga de la impresora. Consulta las especificaciones del regulador para conocer su capacidad en vatios (W).</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Apaga la Impresora y el Regulador:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Apaga tanto la impresora como el regulador antes de conectarlos.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Conexión del Cable de Alimentación:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Conecta el cable de alimentación de la impresora a una de las salidas del regulador de voltaje.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Conexión del Cable USB o Ethernet:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Si tu impresora es compatible con conexión USB o Ethernet, conecta el cable correspondiente a la impresora y al puerto USB o Ethernet del regulador.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Enciende el Regulador y la Impresora:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Enciende primero el regulador de voltaje y luego la impresora.</li>
                    </ul>
                  </li>
                  <li className="text-black font-bold">
                    Verifica la Funcionalidad:
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside text-gray-900 dark:text-gray-400 font-normal">
                      <li>Comprueba si la impresora se enciende correctamente y si puedes imprimir una página de prueba.</li>
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

export default ProblemasComunes;

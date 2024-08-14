import React, { useEffect, useState, useRef } from 'react';
import { FaAngleLeft, FaAngleRight, FaLaptop, FaPrint, FaPhoneAlt, FaWifi, FaEthernet, FaBolt, FaPlus } from 'react-icons/fa';
import ModalUsuario from './ModalUsuario';

function Principal() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [counts, setCounts] = useState({
    pendientes: 0,
    activos: 0,
    computadoras: 0,
    impresoras: 0,
    telefonos: 0,
    internet: 0,
    nodos: 0,
    reguladores: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const moreInfoRef = useRef(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:8080/ssti/servicio/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (data.status === 'OK' && !data.error) {
            // Filtrar solo "Activo" y "Pendiente"
            const filteredData = data.data.filter(item => 
              item.estado === 'Activo' || item.estado === 'Pendiente'
            );
  
            setData(filteredData);
            setFilteredData(filteredData);
            calculateCounts(filteredData);
            checkAndPatch(filteredData);
          } else {
            throw new Error(data.message || 'Error fetching data');
          }
        })
        .catch(error => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
  
    fetchData(); // Fetch initial data
  
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);
  
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  

  useEffect(() => {
    const today = new Date().toLocaleDateString('en-CA'); // Fecha actual en formato YYYY-MM-DD según la zona horaria local

    const sortedData = data.sort((a, b) => {
      const dateA = new Date(a.fecha).toLocaleDateString('en-CA');
      const dateB = new Date(b.fecha).toLocaleDateString('en-CA');

      // Si la fecha es anterior al día actual, ponerla primero
      if (dateA < today && dateB >= today) return -1;
      if (dateA >= today && dateB < today) return 1;

      // Si ambas fechas están antes del día actual o en el día actual, ordenar por fecha de manera ascendente
      return dateA.localeCompare(dateB);
    });

    const filtered = sortedData.filter(item => {
      const nombre = item.nombre ? item.nombre.toLowerCase() : "";
      const area = item.area ? item.area.toLowerCase() : "";
      const piso = item.piso ? item.piso.toLowerCase() : "";
      const equipo = item.equipo ? item.equipo.toLowerCase() : "";
      const correo = item.correo ? item.correo.toLowerCase() : "";

      return (
        nombre.includes(searchTerm.toLowerCase()) ||
        area.includes(searchTerm.toLowerCase()) ||
        piso.includes(searchTerm.toLowerCase()) ||
        equipo.includes(searchTerm.toLowerCase()) ||
        correo.includes(searchTerm.toLowerCase())
      );
    });

    setFilteredData(filtered);

    calculateCounts(filtered); // Recalcular los counts al filtrar
  }, [searchTerm, data]);

  const calculateCounts = (items) => {
    const newCounts = {
      pendientes: 0,
      activos: 0,
      computadoras: 0,
      impresoras: 0,
      telefonos: 0,
      internet: 0,
      nodos: 0,
      reguladores: 0,
    };

    items.forEach(item => {
      if (item.estado === 'Pendiente') newCounts.pendientes++;
      if (item.estado === 'Activo') newCounts.activos++;

      switch (item.equipo) {
        case 'Computadora':
          newCounts.computadoras++;
          break;
        case 'Impresora':
          newCounts.impresoras++;
          break;
        case 'Teléfono':
          newCounts.telefonos++;
          break;
        case 'Internet':
          newCounts.internet++;
          break;
        case 'Nodo':
          newCounts.nodos++;
          break;
        case 'Regulador':
          newCounts.reguladores++;
          break;
        default:
          break;
      }
    });

    setCounts(newCounts);
  };

  const checkAndPatch = (items) => {
    const today = new Date().toLocaleDateString('en-CA'); // Obtiene la fecha actual en formato YYYY-MM-DD según la zona horaria local

    items.forEach(item => {
      if (item.fecha !== today && item.estado !== 'Pendiente' && item.id_servicio !== undefined) {
        fetch(`http://localhost:8080/ssti/servicio/${item.id_servicio}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ estado: 'Pendiente' }),
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Error al actualizar el estado');
            }
            return response.json();
          })
          .then(updatedItem => {
            setData(prevData => prevData.map(d => d.id_servicio === item.id_servicio ? updatedItem : d));
          })
          .catch(error => {
            console.error('Error updating item:', error);
          });
      }
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const equipmentIcons = {
    Computadora: <FaLaptop className="inline-block w-5 h-5 mr-2 text-black" />,
    Impresora: <FaPrint className="inline-block w-5 h-5 mr-2 text-black" />,
    Teléfono: <FaPhoneAlt className="inline-block w-5 h-5 mr-2 text-black" />,
    Internet: <FaWifi className="inline-block w-5 h-5 mr-2 text-black" />,
    Nodo: <FaEthernet className="inline-block w-5 h-5 mr-2 text-black" />,
    Regulador: <FaBolt className="inline-block w-5 h-5 mr-2 text-black" />,
  };

  const getFirstName = (fullName) => {
    if (!fullName) return "N/A"; // Devuelve "N/A" si el nombre está vacío o es null
    return fullName.split(' ')[0]; // Divide el nombre por espacios y devuelve la primera parte
  };

  const handleRowClick = (item) => {
    setSelectedItem(item);  // Establecer el ítem seleccionado
    setIsModalOpen(true);    // Abrir el modal
  };

  const closeModal = () => {
    setIsModalOpen(false);   // Cerrar el modal
    setSelectedItem(null);   // Limpiar el ítem seleccionado
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <div className="flex flex-nowrap gap-4">
        <div className="w-full lg:w-9/12 2xl:w-4/5 h-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div ref={moreInfoRef} className="md:w-full mx-auto ">
            <div className="flex justify-between items-center mb-4">
              <button className="flex items-center bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                <FaPlus className="mr-2" />
                <span>Nuevo Reporte</span>
              </button>

              <div className="flex justify-end items-center space-x-5">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {indexOfFirstItem + 1}
                  </span>{" "}
                  -{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {Math.min(indexOfLastItem, filteredData.length)}
                  </span>{" "}
                  de{" "}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {filteredData.length}
                  </span>
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                  <button
                    onClick={() =>
                      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="sm:rounded-l-lg flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-teal-400 rounded-s hover:bg-teal-500 dark:bg-teal-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <FaAngleLeft className="md:h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="sm:rounded-r-lg flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-teal-400 border-0 border-s border-teal-400 rounded-e hover:bg-teal-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <FaAngleRight className="md:h-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="2xl:text-base lg:text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Equipo
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Piso
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Área
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Estado
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                      onClick={() => handleRowClick(item)}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium 2xl:text-base lg:text-sm text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {equipmentIcons[item.equipo]}
                        {item.equipo}
                      </th>
                      <td className="px-6 py-4 2xl:text-base lg:text-sm">{getFirstName(item.nombre)}</td>
                      <td className="px-6 py-4 2xl:text-base lg:text-sm">{item.piso || "N/A"}</td>
                      <td className="px-6 py-4 2xl:text-base lg:text-sm">{item.area || "N/A"}</td>
                      <td className="px-6 py-4 flex items-center 2xl:text-base lg:text-sm">
                        <span
                          className={`w-3 h-3 rounded-full mr-2 ${item.estado === "Activo"
                            ? "bg-green-500"
                            : item.estado === "Pendiente"
                              ? "bg-yellow-500"
                              : "bg-sky-500"
                            }`}
                        ></span>
                        {item.estado}
                      </td>
                      <td className="px-6 py-4 2xl:text-base lg:text-sm">{formatDate(item.fecha)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {loading && (
              <div className="flex justify-center mt-4">
                <div className="inline-flex items-center text-sm font-semibold text-blue-800 bg-blue-100 rounded-full p-2">
                  <span className="w-2 h-2 mr-2 bg-blue-400 rounded-full animate-pulse"></span>
                  Cargando...
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-center mt-4">
                <div className="inline-flex items-center text-sm font-semibold text-red-800 bg-red-100 rounded-full p-2">
                  <span className="w-2 h-2 mr-2 bg-red-400 rounded-full"></span>
                  Error al cargar los datos
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-3/12 2xl:w-1/5">
          <div className="h-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-xl font-medium mb-7 text-gray-900 dark:text-white">
              Filtro de Búsqueda
            </h2>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar..."
              className="w-full px-3 py-2 text-sm text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
            />
          </div>

          <div className="h-auto p-4 mt-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-5">Estado de Reportes Actuales</h2>

            <div className="flex items-center mb-5">
              <span className="relative flex h-3 w-3 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">Actualizando</span>
            </div>

            <hr className="my-4 border-gray-300 dark:border-gray-600" />

            <div className="grid grid-cols-2 gap-7 mt-7 ">
              {[
                { count: counts.pendientes, label: 'Pendientes' },
                { count: counts.activos, label: 'Activos' },
                { count: counts.computadoras, label: 'Computadoras' },
                { count: counts.impresoras, label: 'Impresoras' },
                { count: counts.telefonos, label: 'Teléfonos' },
                { count: counts.internet, label: 'Internet' },
                { count: counts.nodos, label: 'Nodos' },
                { count: counts.reguladores, label: 'Reguladores' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-2 bg-white border rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-600">
                  <div className="lg:text-2xl font-bold text-gray-800 dark:text-white">{item.count}</div>
                  <div className="lg:text-base font-medium text-gray-500 dark:text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>

      {selectedItem && (
        <ModalUsuario
          isOpen={!!selectedItem}
          onClose={closeModal}
          data={selectedItem}
        />
      )}
    </>
  );
}

export default Principal;

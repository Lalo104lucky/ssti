import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt, FaPencilAlt, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

function Directorio() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:8080/ssti/directorio/')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (data.status === 'OK' && !data.error) {
            setData(data.data);
            setFilteredData(data.data);
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

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const filtered = data.filter(item => {
      const piso = item.piso ? item.piso.toLowerCase() : "";
      const area = item.area ? item.area.toLowerCase() : "";
      const extension = item.extension ? item.extension.toLowerCase() : "";

      return (
        piso.includes(searchTerm.toLowerCase()) ||
        area.includes(searchTerm.toLowerCase()) ||
        extension.includes(searchTerm.toLowerCase())
      );
    });

    setFilteredData(filtered);
  }, [searchTerm, data]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="w-full lg:w-9/12 2xl:w-4/5 h-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Buscar reporte"
          className="px-3 py-2 text-sm border border-gray-300 rounded-lg w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Piso</th>
              <th scope="col" className="px-6 py-3">Área</th>
              <th scope="col" className="px-6 py-3">Extensión</th>
              <th scope="col" className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{item.piso || "N/A"}</td>
                <td className="px-6 py-4">{item.area || "N/A"}</td>
                <td className="px-6 py-4">{item.extension || "N/A"}</td>
                <td className="px-6 py-4 flex justify-between">
                  <FaPencilAlt className="text-teal-500 cursor-pointer hover:text-teal-700" title="Editar" />
                  <FaRegTrashAlt className="text-red-500 cursor-pointer hover:text-red-700" title="Borrar" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
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
          <div className="inline-flex xs:mt-0">
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
  );
}

export default Directorio;

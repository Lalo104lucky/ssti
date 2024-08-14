import React, { useEffect, useState, useRef } from 'react';
import { FaAddressBook, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Directorio1 from '../../assets/Directorio_E.png';
import { initFlowbite } from 'flowbite';
import '../../App.css';

function DirectorioExtensiones() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(30);
    const moreInfoRef = useRef(null);

    const scrollToMoreInfo = () => {
        const elementPosition = moreInfoRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - (window.innerHeight * 0.12);
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        initFlowbite();

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
    }, []);

    useEffect(() => {
        const filtered = data.filter(item =>
            item.piso.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.extension.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
        setCurrentPage(1); // Reset to the first page after filtering
    }, [searchTerm, data]);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    return (
        <>
            <div className='bg-white to-transparent flex justify-center common-issues-section mt-20'>
                <div className="max-w-6xl p-6 rounded-lg flex flex-col md:flex-row items-center">
                    <div className='md:w-1/2 flex flex-col items-center md:items-start text-justify'>
                        <h2 className='text-2xl md:text-3xl font-bold mb-9'>Directorio de Extensiones</h2>
                        <p className='text-xl mb-9 mr-4'>
                            Los directorios telefónicos desempeñan un papel fundamental en la comunicación y organización al facilitar la búsqueda y localización de información, permitiendo que las personas se conecten entre sí. Su funcionamiento se basa en la recopilación y organización de datos.
                        </p>
                        <button onClick={scrollToMoreInfo} className='bg-green-500 text-white hover:bg-green-600 py-3 px-7 mb-9 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg flex items-center self-center text-xl'>
                            <FaAddressBook className='mr-2 text-2xl' /> Ver Directorio
                        </button>
                    </div>
                    <div className='md:w-1/2 flex justify-center'>
                        <img src={Directorio1} alt="Problemas Comunes" className='rounded-lg w-full md:w-auto object-cover' />
                    </div>
                </div>
            </div>

            <div ref={moreInfoRef} className="md:w-3/4 mx-auto mt-5">
                <div className="flex justify-between items-center mb-4">
                    <div className="w-full md:w-5/12">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-xl text-gray-900 border border-gray-400 rounded-xl bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Buscar en el directorio..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end items-center space-x-5">
                        <span className="text-sm text-gray-700 dark:text-gray-400">
                            <span className="font-semibold text-gray-900 dark:text-white">{indexOfFirstItem + 1}</span> - <span className="font-semibold text-gray-900 dark:text-white">{Math.min(indexOfLastItem, filteredData.length)}</span> de <span className="font-semibold text-gray-900 dark:text-white">{filteredData.length}</span>
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button
                                onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))}
                                disabled={currentPage === 1}
                                className="sm:rounded-l-lg flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-green-500 rounded-s hover:bg-green-600 dark:bg-green-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                <FaAngleLeft className='md:h-6' />
                            </button>
                            <button
                                onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="sm:rounded-r-lg flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-green-500 border-0 border-s border-green-500 rounded-e hover:bg-green-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >

                                <FaAngleRight className='md:h-6' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative text-xl bg-gray-100 overflow-x-auto shadow-md sm:rounded-lg mx-auto mt-9">
                    {loading && <p>Cargando...</p>}
                    {error && <p>No hay datos</p>}
                    {!loading && !error && (
                        <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xl text-gray-700 uppercase bg-teal-400 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        PISO
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ÁREA
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        EXTENSION
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((item) => (
                                    <tr key={item.id_directorio} className="odd:bg-white odd:dark:bg-gray-900 even:bg-teal-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.piso}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.area}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.extension}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

            </div>
        </>
    );
}

export default DirectorioExtensiones;

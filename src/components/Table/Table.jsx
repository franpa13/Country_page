import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";

const Table = ({ allCountries }) => {
    // Definir el número de países que se mostrarán por página
    const countriesPerPage = 10;

    // Calcular el número total de páginas
    const totalPages = Math.ceil(allCountries && allCountries.length / countriesPerPage);

    // Estado para mantener el número de página actual
    const [currentPage, setCurrentPage] = useState(1);

    // Función para cambiar la página
    const handlePageChange = (page) => {
        // Verificar si el número de página está dentro de los límites
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Calcular el índice inicial y final de los países a mostrar en la página actual
    const startIndex = (currentPage - 1) * countriesPerPage;
    const endIndex = Math.min(startIndex + countriesPerPage, allCountries && allCountries.length);

    return (
        <div className='p-2 flex flex-col justify-center items-start mb-4  md:w-2/3 md:p-3'>
            <table className='w-full'>
                <thead className='border-b border-gray-700 text-center mb-4'>
                    <tr className='py-2 '>
                        <th className='text-xs w-1/4 md:text-xs text-gray-500 p-3 '>Flag</th>
                        <th className='text-xs w-1/4 md:text-xs text-gray-500'>Name</th>
                        <th className='text-xs w-1/4 md:text-xs text-gray-500'>Population</th>
                        <th className='text-xs w-1/4 md:text-xs text-gray-500'>Area (km²)</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {allCountries && allCountries.slice(startIndex, endIndex).map((country) => {

                        return (

                            <tr className=' animate-fade-in-up  hover:bg-gray-400' key={country.name.common}>
                                <td className='py-5 text-xs text-center flex justify-center  items-center '>
                                    <img className='w-1/3 md:w-1/4  rounded-sm' src={country.flags.png} alt="" />
                                </td>
                                <td className='text-xs py-5 text-semibold text-center md:text-sm '>{country.name.common}</td>
                                <td className='text-xs py-5 text-semibold text-center md:text-sm '>{country.population}</td>
                                <td className='text-xs py-5 text-semibold text-center md:text-sm '>{country.area}</td>
                                <td><Link to={`/${country.name.common}`} className='text-xs md:text-xl px-2'><FaEye /></Link></td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>

            {/* Menú de navegación */}
            <div className='flex p-2 justify-center gap-5 w-full items-center'>
                {/* Botón de página anterior */}
                <svg
                    className="w-4 h-4 cursor-pointer rtl:rotate-180"
                    onClick={() => handlePageChange(currentPage - 1)}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                >
                    <path
                        stroke="#38bdf8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                    />
                </svg>

                {/* Botón de página siguiente */}
                <svg
                    className="w-4 h-4 rtl:rotate-180 cursor-pointer"
                    onClick={() => handlePageChange(currentPage + 1)}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                >
                    <path
                        stroke="#38bdf8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Table;

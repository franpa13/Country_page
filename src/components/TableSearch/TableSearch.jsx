import React from 'react'
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import "./TableSearch.css"

export default function TableSearch({ allCountries, busqueda }) {
    const [elementosSinEncontrar, setElementosSinEncontrar] = useState(0)
    const countriesPerPage = 10;
    console.log(busqueda, "esto es busqueda");
    // Calcular el número total de páginas
    const totalPages = Math.ceil(allCountries && allCountries.length / countriesPerPage);
    // Estado para mantener el número de página actual
    const [currentPage, setCurrentPage] = useState(1);


    const filteredCountries = allCountries && allCountries.filter((country) => {

        return country.name.common && country.name.common.toLowerCase().includes(busqueda.toLowerCase());


        // return country.name.common && country.name.common.toLowerCase().includes(busqueda);
    });

    useEffect(() => {
        if (filteredCountries.length < 10) {
            setElementosSinEncontrar(10 - filteredCountries.length);
        } else {
            setElementosSinEncontrar(0);
        }
    }, [filteredCountries]);


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
        <div className='p-2 flex flex-col  justify-center items-center md:justify-start md:mb-12  md:w-2/3 md:p-3'>
            <table className='w-full'>
                <thead className='border-b border-gray-700 text-center mb-4'>
                    <tr className='py-2 '>
                        <th className='text-xs w-1/4 md:text-xs text-gray-500 p-3 '>Flag</th>
                        <th className='text-xs w-1/4 md:text-xs text-gray-500'>Name</th>
                        <th className='text-xs w-1/4 md:text-xs text-gray-500'>Population</th>
                        <th className='text-xs w-1/4 md:text-xs text-gray-500'>Area (km²)</th>
                    </tr>
                </thead>
                <tbody className="relative">
                    {filteredCountries.length > 0 ? filteredCountries.slice(startIndex, endIndex).map((country) => {
                        return (


                            <tr className='animate-fade-in-up hover:bg-gray-400' key={country.name.common}>
                                <td className='py-5 text-xs text-center flex justify-center items-center'>
                                    <img className='w-1/3 md:w-1/4 rounded-sm' src={country.flags.png} alt="" />
                                </td>
                                <td className='text-xs py-5 text-semibold text-center md:text-sm'>{country.name.common}</td>
                                <td className='text-xs py-5 text-semibold text-center md:text-sm'>{country.population}</td>
                                <td className='text-xs py-5 text-semibold text-center md:text-sm'>{country.area}</td>



                            </tr>

                        )
                    }) : (
                        <p className=' text-center absolute w-1/2 left-1/4 right-1/4  md:w-auto  top-12 md:left-1/3 md:right-1/3 text-gray-500 font-semibold animate-zoom-in md:text-lg'>No se encontraron resultados...</p>
                    )}
                </tbody>
            </table>
            <p className='w-full flex justify-center items-center'>
                {filteredCountries.length >= 1 && (
                    <Box sx={{ width: "80%", display: "flex", flexDirection: "column", gap: "20px" }}>
                        {[...Array(elementosSinEncontrar)].map((_, index) => (
                            <div className='w-full flex justify-between gap-10' key={index}>
                                <Skeleton variant="circular" width={40} height={40} sx={{backgroundColor: "#383838" }}   />
                                <Skeleton variant="text" sx={{ fontSize: '1rem', width: "100%", backgroundColor: "#383838" }} />

                            </div>
                        ))}
                    </Box>
                )}
            </p>
            {filteredCountries.length > 0 && filteredCountries.length > 10 && (

                <div className='flex p-2 justify-center gap-5 w-full items-center'>

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
            )}

        </div>
    );
}

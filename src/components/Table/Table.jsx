import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { Skeleton, Box } from '@mui/material';
const Table = ({ allCountries }) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const countriesPerPage = 10;
    const totalPages = Math.ceil(allCountries && allCountries.length / countriesPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page) => {

        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

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
                    {allCountries ? allCountries.slice(startIndex, endIndex).map((country) => {

                        return (

                            <tr className=' animate-fade-in-up  ' key={country.name.common}>
                                <td className='py-5 text-xs text-center flex justify-center  items-center hover:bg-gray-100 hover:text-black '>
                                    <img className='w-1/3 md:w-1/4  rounded-sm' src={country.flags.png} alt="" />
                                </td>
                                <td className='text-xs py-5 font-semibold text-center md:text-sm hover:bg-gray-100 hover:text-black'>{country.name.common}</td>
                                <td className='text-xs py-5 font-semibold text-center md:text-sm hover:bg-gray-100 hover:text-black'>{country.population}</td>
                                <td className='text-xs py-5 font-semibold text-center md:text-sm hover:bg-gray-100 hover:text-black'>{country.area}</td>
                                <td className='flex justify-center w-full'><Link to={`/${country.name.common}`} className='text-xs md:text-xl mx-2 animate-pulse font-semibold flex justify-center w-full '><FaEye /></Link></td>
                            </tr>

                        )
                    }) : (

                        array.map((i, item) => {
                            return (

                                <tr key={item}>
                                    <td className='text-xs py-3 font-semibold text-center md:text-sm  hover:text-black'>    <Skeleton variant="text" height={45} sx={{ fontSize: '2rem', width: "100%", backgroundColor: "#383838" }} /></td>
                                    <td className='text-xs py-3 font-semibold text-center md:text-sm  hover:text-black'>    <Skeleton variant="text" height={45} sx={{ fontSize: '2rem', width: "100%", backgroundColor: "#383838" }} /></td>
                                    <td className='text-xs py-3 font-semibold text-center md:text-sm  hover:text-black'>    <Skeleton variant="text" height={45} sx={{ fontSize: '2rem', width: "100%", backgroundColor: "#383838" }} /></td>
                                    <td className='text-xs py-3 font-semibold text-center md:text-sm  hover:text-black'>    <Skeleton variant="text" height={45} sx={{ fontSize: '2rem', width: "100%", backgroundColor: "#383838" }} /></td>
                                    <td className='text-xs py-3 font-semibold text-center md:text-sm  hover:text-black'>    <Skeleton variant="text" height={45} sx={{ fontSize: '2rem', width: "100%", backgroundColor: "#383838" }} /></td>
                                </tr>
                            )
                        })


                    )}
                </tbody>
            </table>

            {/* Menú de navegación */}
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

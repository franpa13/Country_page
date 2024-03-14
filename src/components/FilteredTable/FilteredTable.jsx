import React from 'react'
import { useState, useEffect } from 'react';
export default function FilteredTable({ allCountries, formData }) {




    const filteredCountries = allCountries.filter(country => {
        console.log(country.region, "esto es region");
        // Filtrar por región
        if (formData.region !== "All" && formData.region !== country.region) {
            return false;
        }
        // Filtrar por membresía en la ONU
        if (formData.unMember && !country.unMember) {
            return false;
        }
        // Filtrar por independencia
        if (formData.independent && !country.independent) {
            return false;
        }
        return true;
    });

    if (formData.sortBy !== "All") {
        filteredCountries.sort((a, b) => b.population - a.population);
    }
    return (
        <div className='w-full'>

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
                    {filteredCountries.length > 0 ? filteredCountries.map((country) => {
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
        </div>
    )
}

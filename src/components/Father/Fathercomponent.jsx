import React, { useState, useEffect } from 'react'
import "./Fathercomponent.css"
import { CiSearch } from "react-icons/ci";
import Checkbox from '@mui/material/Checkbox';
import FilteredTable from '../FilteredTable/FilteredTable';
import Table from '../Table/Table';
import TableSearch from '../TableSearch/TableSearch';





export default function Fathercomponent({ allCountries }) {
    const [busqueda, setBusqueda] = useState("")
    const [formData, setFormData] = useState({
        sortBy: "All",
        region: "All",
        unMember: false,
        independent: false
    });




    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue
        });
    };

    return (

        <section className='flex justify-center sm:justify-center md:justify-center  rounded-sm md:items-start md:mb-16 '>

            <div className='father flex flex-col  md:absolute md:top-1/3   rounded-lg mb-12 md:w-11/12 md:flex-row' >
                <header className='p-2 flex w-full justify-between items-center       sm:justify-center sm:gap-28 md:p-6 md:w-1/3 md:items-start  '>
                    <form className=' w-full gap-3 p-1 flex justify-center  items-center   flex-col     sm:p-1  md:gap-7 ' action="">
                        <div className='flex justify-between  items-center  w-full sm:justify-around md:justify-between md:flex-col  md:gap-3  '>

                            <h2 className='text-xs font-semibold       sm:text-base md:text-sm '>Found {allCountries && allCountries.length} countries</h2>
                            <div className='flex items-center form rounded-lg p-1 md:w-full'>
                                <CiSearch className='text-gray-500 form md:text-xl' />
                                <input onChange={(e) => setBusqueda(e.target.value)} placeholder='Search by Name' className='placeholder-gray-500 font-semibold text-xs outline-none p-1 form border-none       sm:text-base md:w-full md:text-sm ' type="text" />
                            </div>
                        </div>
                        <div className='w-full flex flex-col justify-center items-start gap-3'>
                            <label className='text-xs font-semibold text-gray-500      sm:text-base' htmlFor="">
                                Sort by
                            </label>
                            <select id="countries" name='sortBy' value={formData.sortBy} onChange={handleInputChange} className=" border outline-none input border-gray-700  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="All">All</option>
                                <option value="Population">Population</option>
                            </select>
                        </div>

                        <div className='w-full flex flex-col justify-center items-start gap-3'>
                            <label className='text-xs font-semibold text-gray-500      sm:text-base' htmlFor="">
                                Region
                            </label>
                            <select value={formData.region} id="region"
                                name="region" onChange={handleInputChange} className=" border outline-none input border-gray-700  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="All">All</option>
                                <option value="Americas">Americas</option>
                                <option value="Antarctic">Antarctic</option>
                                <option value="Africa">Africa</option>
                                <option value="Asia">Asia</option>
                                <option value="Europe">Europe</option>
                                <option value="Oceania">Oceania</option>
                            </select>
                        </div>
                        <section className='flex justify-start flex-col items-start w-full'>

                            <div className="flex items-center w-full mb-4 gap-2">

                                <input type="checkbox" name='unMember' checked={formData.unMember} onChange={handleInputChange} className='md:w-5 md:h-5 bg-gray-600 check' />
                                <label htmlFor="" className='text-xs md:text-xs '>Member of the United Nations</label>
                            </div>
                            <div className="flex items-center w-full mb-4 gap-2">
                                <input type="checkbox" name='independent' checked={formData.independent} onChange={handleInputChange} className='md:w-5 md:h-5 check' />
                                <label htmlFor="" className='text-xs md:text-xs'>Independent</label>
                            </div>



                        </section>

                    </form>
                </header>
                {busqueda || formData.independent !== false ||formData.unMember !== false || formData.region!== "All" ||formData.sortBy !== "All" ? (
                    <TableSearch allCountries={allCountries} formData={formData} busqueda={busqueda}></TableSearch>
                ) : (
                    <Table allCountries={allCountries}></Table>
                )}


            </div>
        </section>


    )
}

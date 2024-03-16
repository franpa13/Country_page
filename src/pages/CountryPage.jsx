import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./CountryPage.css"
import { FaWindowClose } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
export default function CountryPage({ allCountries }) {
  let { name } = useParams()
  const [country, setCountry] = useState({})
  const filteredCountry = allCountries && allCountries.filter((country) => {
    return country.name.common === name;
  });
  const money = filteredCountry && filteredCountry.map((country) => {
    let peso = country.currencies[Object.keys(country.currencies)[0]];
    return peso.name;// Acceder al primer elemento del objeto currencies
  });
  const simbolo = filteredCountry && filteredCountry.map((country) => {
    let simbol = country.currencies[Object.keys(country.currencies)[0]];
    return simbol.symbol
  });

  const firstLanguageKey = filteredCountry && filteredCountry.length > 0 ? Object.keys(filteredCountry[0].languages)[0] : null;
  const firstLanguage = firstLanguageKey ? filteredCountry[0].languages[firstLanguageKey] : null;



  const languageKey = filteredCountry && filteredCountry.length > 0 ? Object.keys(filteredCountry[0].languages) : [];
  const lastLanguageKey = languageKey.length > 0 ? languageKey[languageKey.length - 1] : null;
  const lastLanguage = lastLanguageKey ? filteredCountry[0].languages[lastLanguageKey] : null;

  return (
    <div className=' contenedor '>
      <header className='bg-black  md:p-4 flex justify-between p-0'>
        <Link to={"/"} className='bg-black flex items-start'>

          <img className='bg-black w-3/4 m-6 md:w-full' src="/Logo.svg" alt="" />
        </Link>
        <img src="/hero-image-wr.jpg" className='w-2/3 md:w-1/4 ' alt="" />
      </header>
      <section className='p-3 md:p-0 animate-slide-out-top'>
        {filteredCountry && filteredCountry.map((country) => {
      
          return (
            <div key={country.name.common} className='flex flex-col justify-around gap-6 md:flex-row md:gap-12'>
              <div className='flex justify-around gap-3 md:justify-center md:flex-col md:items-center md:w-2/3 md:mt-4'>

                <img className='w-1/3 md:w-full md:p-2' src={country.flags.png} alt="" />
                <div className='flex flex-col gap-3'>

                  <h1 className='text-base  font-semibold md:text-2xl'>Nombre :  {country.name.common}</h1>
                  <span className='text-base font-semibold md:text-2xl'>Capital :  {country.capital}</span>
                  <span className='text-base  font-semibold md:text-2xl'>Continent :  {country.continents}</span>
                </div>
              </div>
              <div className='flex w-full flex-col gap-4 md:mt-4'>
                <div className='flex w-full justify-between md:justify-start md:gap-24'>
                  <span className='text-base md:text-xl font-semibold'>Currency : {money} </span>
                  <span className='text-base md:text-xl font-semibold'>Symbol : {simbolo}</span>

                </div>
                <div className='flex flex-col gap-4'>

                  <span className='text-base md:text-xl font-semibold'>Languages :{`  ${lastLanguage} /  ${firstLanguage}`}</span>
                  <span className='text-base md:text-xl font-semibold'>Population : {country.population}</span>
                  <span className='text-base md:text-xl font-semibold'>Timezones : {country.timezones}</span>
                  <span className='text-base md:text-xl font-semibold'>Area (km²) : {country.area}</span>
                  <div className='flex flex-col gap-3'>
                    <span className='text-base md:text-xl font-semibold'>bordering countries :</span>
                    <ul className='flex justify-center'>
                      {country.borders ? country.borders.map((limi, index) => {
                        return (

                          <li key={index} className='md:text-xl font-semibold'>
                            {` ${limi} -`}
                          </li>

                        )
                      }) : (
                        <span className='md:text-xl font-semibold'>No tiene</span>
                      )}
                    </ul>
                  </div>
                  <div className='flex gap-2  items-center '>

                    <span className='text-base  md:text-xl font-semibold'> UnMember : </span>
                    {country.unMember && country.unMember === true ? (
                      <ImCheckboxChecked className='bg-blue-900 md:text-xl' />
                    ) : (
                      <FaWindowClose className='bg-blue-900 md:text-xl' />
                    )}
                  </div>
                </div>
                <span className='text-base md:text-xl font-semibold'>Fifa : {country.fifa}</span>
                <span className='text-base md:text-xl font-semibold'>Tld : {country.tld}</span>
                <span className='text-base md:text-xl font-semibold'>startOfWeek : {country.startOfWeek}</span>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
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
    <div>
      <header className='bg-black  md:p-4 flex justify-between items-center'>
        <Link to={"/"} className='bg-black'>

          <img className='bg-black w-2/3 md:w-full' src="/Logo.svg" alt="" />
        </Link>
        <img src="/hero-image-wr.jpg" className='w-1/2 md:w-1/6 ' alt="" />
      </header>
      <section className='p-3'>
        {filteredCountry && filteredCountry.map((country) => {
          console.log(country);
          return (
            <div key={country.name.common} className='flex flex-col justify-around gap-6'>
              <div className='flex justify-around gap-3'>

                <img className='w-1/3 ' src={country.flags.png} alt="" />
                <div className='flex flex-col gap-3'>

                  <h1 className='text-base'>Nombre :  {country.name.common}</h1>
                  <span className='text-base'>Capital :  {country.capital}</span>
                  <span className='text-base'>Continent :  {country.continents}</span>
                </div>
              </div>
              <div className='flex w-full flex-col gap-4'>
                <div className='flex w-full justify-between'>
                  <span className='text-base'>Currency : {money} </span>
                  <span className='text-base'>Symbol : {simbolo}</span>

                </div>
                <div className='flex flex-col gap-4'>

                  <span className='text-base'>Languages :{ `  ${lastLanguage} /  ${firstLanguage}`}</span>
                  <span className='text-base'>Population : {country.population}</span>
                  <span className='text-base'>Timezones : {country.timezones}</span>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

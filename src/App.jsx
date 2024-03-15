import { useEffect, useState } from 'react'
import { LeerPaises } from './service/api'
import { Router, Routes, Route } from "react-router-dom"

import Fathercomponent from './components/Father/Fathercomponent'
import CountryPage from './pages/CountryPage'
import './App.css'

function App() {
  const [allCountries, setAllcountries] = useState()
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await LeerPaises()
        setAllcountries(response)
      }
      fetchData()
    } catch (e) {
      console.log("error", e);
    }
  }, [])

  return (
    <>

        <Routes>
          <Route path='/' element={

            <div className='md:retive pb-6 '>
              <div className='relative '>
                <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 md:w-1/6 bg-black ' src="/Logo.svg" alt="" />
                <img className='md:w-full' src="/hero-image-wr.jpg" alt="" />
              </div>
              <Fathercomponent allCountries={allCountries} ></Fathercomponent>


            </div>
          }>

          </Route >
          <Route path='/:name' element={<CountryPage allCountries={allCountries}/>}>

          </Route>
        </Routes>
 
    </>
  )
}

export default App

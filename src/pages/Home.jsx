import React, { useEffect } from 'react'
import MainSlider from '../components/MainSlider/MainSlider'
import MainBenefits from '../components/MainBenefits/MainBenefits'
import MainProducts from '../components/MainProducts/MainProducts'
import MainCategories from '../components/MainCategories/MainCategories'
import MainEplores from '../components/MainEplores/MainEplores'

const Home = () => {
  useEffect(() => {
    if(localStorage.getItem("products") === null){
      localStorage.setItem('products','[]')
    }

  }, []);
  return (
    <div>
    <MainSlider/>
    <MainCategories/>
    <MainBenefits/>
    <MainProducts/>
    <MainEplores/>
    </div>
  )
}

export default Home
import React from 'react'
import Banner from '../Banner'
import Chefs from '../../pages/Chefs/Chefs'
import ItalianRecipe from '../../pages/Recipe/ItalianRecipe'
import FoodEvent from '../../pages/FoodEvent'




const Home = () => {

  return (
    <>
      
        <section>
        <Banner></Banner>
        </section>
        <section className=' py-4'>
        <Chefs></Chefs>
        </section>
        <section>
          <ItalianRecipe></ItalianRecipe>
        </section>
        <section>
          <FoodEvent></FoodEvent>
        </section>
  
    </>
  )
}

export default Home

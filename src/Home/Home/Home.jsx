import React from 'react'
import Banner from '../Banner'
import Chefs from '../../pages/Chefs/Chefs'
import ItalianRecipe from '../../pages/Recipe/ItalianRecipe'




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
  
    </>
  )
}

export default Home

import React from 'react'
import Banner from '../Banner'
import Chefs from '../../pages/Chefs/Chefs'

const Home = () => {

  return (
    <>
      
        <section>
        <Banner></Banner>
        </section>
        <section className=' py-4'>
        <Chefs></Chefs>
        </section>
        
    
    </>
  )
}

export default Home

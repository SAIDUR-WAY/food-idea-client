import React,{Suspense, lazy} from 'react'
import Banner from '../Banner'
// import Chefs from '../../pages/Chefs/Chefs'
import ItalianRecipe from '../../pages/Recipe/ItalianRecipe'
import FoodEvent from '../../pages/FoodEvent'
import { Spinner } from 'react-bootstrap'


//lazy loading import
const Chefs = lazy(()=>import('../../pages/Chefs/Chefs'))
// const ItalianRecipe = lazy(()=> import('../../pages/Recipe/ItalianRecipe'))
// const Banner = lazy(()=> import('../Banner'))





const Home = () => {

  return (
    <>
      
        <section>
        <Banner></Banner>
        </section>
        <section className=' py-4'>
          <Suspense fallback={<Spinner animation="border" variant="primary" />}>
          <Chefs></Chefs>
          </Suspense>
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

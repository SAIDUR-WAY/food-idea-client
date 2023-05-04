import React,{Suspense, lazy} from 'react'
import Banner from '../Banner'
// import Chefs from '../../pages/Chefs/Chefs'
// import ItalianRecipe from '../../pages/Recipe/ItalianRecipe'
import FoodEvent from '../../pages/FoodEvent'

const Chefs = lazy(()=>import('../../pages/Chefs/Chefs'))
const ItalianRecipe = lazy(()=> import('../../pages/Recipe/ItalianRecipe'))
// const Banner = lazy(()=> import('../Banner'))





const Home = () => {

  return (
    <>
      
        <section>
        <Suspense fallback={<div>Please Loading....</div>}>
        <Banner></Banner>
        </Suspense>
        </section>
        <section className=' py-4'>
          <Suspense fallback={<div>Please Loading....</div>}>
          <Chefs></Chefs>
          </Suspense>
        
        </section>
        <section>
          <Suspense fallback={<div>Please Loading...</div>}>
          <ItalianRecipe></ItalianRecipe>
          </Suspense>
          
        </section>
        <section>
          <FoodEvent></FoodEvent>
        </section>
  
    </>
  )
}

export default Home

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';
import { Container } from 'react-bootstrap';

const ItalianRecipe = () => {
     const [recipes, setRecipes]= useState([])
     // console.log(recipes)
     
     useEffect(()=>{
          fetch("https://food-idea-server-side-saidur-way.vercel.app/recipes")
          .then(res => res.json())
          .then(data => setRecipes(data))
     }, [])
     return (
          <Container className='border border-1 '>
          <h2 className='text-center text-info fw-bold py-4'>Best Italian Recipes</h2>
          <div className='row g-2 mx-auto'>
               {
                    recipes.map(data => <Recipe
                    key={data.id}
                    data={data}
                    ></Recipe>)
               }
          </div>
          </Container>
     );
};

export default ItalianRecipe;
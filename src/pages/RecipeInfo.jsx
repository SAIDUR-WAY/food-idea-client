import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaHeart, FaRegHeart, FaRegThumbsDown, FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';

const RecipeInfo = ({recipe}) => {
     const [heart, setHeart] = useState(true)

     // console.log(recipe)
     const {recipeName, ingredients, rating,cookingMethod,} = recipe;
     console.log(ingredients)

     const addFavorite = ()=>{
          setHeart(!heart)
     }

     return (
          <div >
               <Card className='h-100'>
          <Card.Header> <span className='text-secondary fw-bold fs-5'>RecipeName:</span> {recipeName} </Card.Header>
          <Card.Body>
            <Card.Title  className='text-secondary fw-bold fs-5'> Ingredients </Card.Title>
            <Card.Text>
               {
               ingredients.map(item =><span className='p-2 '>{item},</span> )
               }
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title  className='text-secondary fw-bold fs-5'> 
               Cooking Method </Card.Title>
            <Card.Text>
               {cookingMethod}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <div className="card-footer d-flex align-items-center">
          <div className='flex-grow-1 d-flex align-items-center'>
               {rating}
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </div>
          <div onClick={addFavorite}>
                    {
                    heart ? <FaRegHeart className='text-primary'></FaRegHeart> : <FaHeart className='text-primary'></FaHeart>
                    }
               
          </div>
        </div>
          </Card.Footer>
        </Card>
          </div>
     );
};

export default RecipeInfo;
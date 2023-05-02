import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { useLoaderData } from 'react-router-dom'
import RecipeInfo from './RecipeInfo'
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa'

const ChefDetails = () => {
     const [like, setLike] = useState(true)
  const chefdetails = useLoaderData()



//   console.log(chefdetails)
  const {
      chefName, photoUrl, bio, recipesInfo, numberOfRecipes, yearOfExperience, likes
     } = chefdetails;
//   console.log(recipesInfo)

  return (
    <section className='border border-text-black-50 rounded p-4'>
      <Card>
        <Card.Img  variant="top" src={photoUrl} />
        <Card.Body>
          <Card.Title> <span className='text-secondary fw-bold fs-5'>Chef Name:</span> {chefName}</Card.Title>
          <Card.Text >
            <span className="d-block text-secondary pb-2 fs-5 fw-bold">Short BIO:</span>
            <span>{bio}</span>
          </Card.Text>
          <Card.Text >
            <span className=" text-secondary pb-2 pe-3 fw-bold">RecipesNumber:</span> 
            <span>{numberOfRecipes}</span>
          </Card.Text>
          <Card.Text >
            <span className=" text-secondary pb-2 pe-3  fw-bold">Experience:</span>
            <span>{yearOfExperience}</span>
          </Card.Text>
       
     
          <div className="card-footer d-flex align-items-center">
          <div className='d-flex align-content-center' onClick={()=> setLike(!like)}>
              <p className='pe-2 mb-0  d-inline'> {likes}</p>
                    {
                    like ? <FaRegThumbsUp className='text-primary fs-4'></FaRegThumbsUp> : <FaThumbsUp className='text-primary fs-4'></FaThumbsUp>
                    }
               
          </div>
        </div>
        </Card.Body>
          
      </Card>
      <div className='d-flex justify-content-around my-4'>
          {
               recipesInfo.map(recipe => <RecipeInfo
               key={recipe._id}
               recipe = {recipe}
               ></RecipeInfo>)
          }
      </div>
    </section>
  )
}

export default ChefDetails

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import andira from '../../assets/andira-small.jpg'
import { Image } from 'react-bootstrap';


const Chef = ({chef}) => {
     const [like, setLike] = useState(true)
     // console.log(chef)
     const {id, chefName, numberOfRecipes, yearOfExperience, chefPicture, likes} = chef;
     // console.log(photoUrl)

  
  return (
    <div className="col">
      <div className="card h-100 bg-dark p-2 text-dark bg-opacity-50">
        <img src={chefPicture} className="card-img-top roundedCircle w-auto h-50" alt="..." />
        {/* <Image className='mx-auto'   /> */}
        <div className="card-body">
          <h5 className="card-title">Name: {chefName}</h5>
          <h5 className="card-title">
               Recipe Number: {numberOfRecipes}
            </h5>
          <h5 className="card-title">
            Experience: {yearOfExperience
}
            </h5>
        </div>
        <div className="card-footer d-flex align-items-center">
          <div className='flex-grow-1'>
               <button className='btn btn-warning text-white opacity-75 '><Link  className='text-decoration-none text-black' to={`/chefs/${id}`}>View Recipes</Link></button>
          </div>
          <div className='d-flex align-items-center' onClick={()=> setLike(!like)}>
             <p className='mb-0'> {likes}</p>
                    {
                    like ? <FaRegThumbsUp className='text-primary fs-2 ps-2'></FaRegThumbsUp> : <FaThumbsUp className='text-primary fs-2 ps-2 '></FaThumbsUp>
                    }
               
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chef

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import andira from '../../assets/andira-small.jpg'
import { Image } from 'react-bootstrap';


const Chef = ({chef}) => {
     const [like, setLike] = useState(true)
     // console.log(chef)
     const {name, numberOfRecipes, yearsOfExperience, photoUrl} = chef;
     console.log(photoUrl)

  
  return (
    <div className="col">
      <div className="card h-100 bg-dark p-2 text-dark bg-opacity-50">
        {/* <img src={andira} className="card-img-top roundedCircle" alt="..." /> */}
        <Image className='mx-auto' src={andira} style={{width: '200px', height: '200px'}} roundedCircle />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <h5 className="card-title">
               Recipe Number: {numberOfRecipes}
            </h5>
          <h5 className="card-title">
            Experience: {yearsOfExperience}
            </h5>
        </div>
        <div className="card-footer d-flex align-items-center">
          <div className='flex-grow-1'>
               <button className='btn btn-warning text-white opacity-75 '><Link  className='text-decoration-none text-black' to='/chefDetails'>View Recipes</Link></button>
          </div>
          <div onClick={()=> setLike(!like)}>
               
                    {
                    like ? <FaRegThumbsUp></FaRegThumbsUp> : <FaThumbsUp></FaThumbsUp>
                    }
               
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chef

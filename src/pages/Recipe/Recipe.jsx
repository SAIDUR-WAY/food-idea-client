import { Rating } from '@smastrom/react-rating';
import React from 'react';

const Recipe = ({data}) => {
  console.log(data)
  const {id, name, img, shortDescription, rating}= data
     return (
<div className="card mb-3 col-md-6" style={{maxWidth:" 540px"}}>
  <div className="row g-0">
    <div className="col-md-4 mx-auto">
      <img src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className='flex-grow-1 d-flex align-items-center py-2'>
               {rating}
          <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
          </div>
        <p className="card-text">{shortDescription}</p>
      </div>
    </div>
  </div>
</div>
     );
};

export default Recipe;
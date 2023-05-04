import React from 'react';
import foodEvent from '../assets/foodevent1.jpg'

const FoodEvent = () => {
     return (
          <div className="card mb-3">
               <h2 className='text-center py-4 fs-1 text-info fw-bold'>Italian Food Festival</h2>
  <div className="row g-0">
    <div className="col-md-6">
      <div className="card-body ">
        <h5 className="card-title fs-2 fw-semibold">Food festivals</h5>
        <p className="card-text"><small>FOOD AND DRINKS EVENTS</small></p>
        <p className="card-text pe-5 text-muted">Welcome to one of the tastiest and most typically Italian area of the website! Before delving into the details of festivals around Italy, this initial post will be necessary to get your mind around the very concept of food festivals and what you can expect from them. </p>
      </div>
    </div>
    <div className="col-md-6">
      <img src={foodEvent} className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
     );
};

export default FoodEvent;
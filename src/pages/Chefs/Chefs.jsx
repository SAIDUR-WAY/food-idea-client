import React, { useEffect, useState } from 'react';
import Chef from './Chef';
import { useLoaderData } from 'react-router-dom';

const Chefs = () => {
     const [chefs, setChefs] = useState([])
     
     // console.log(chefs)
 
     useEffect(()=>{
          fetch(" https://food-idea-server-side-saidur-way.vercel.app/chefs")
          .then(res => res.json())
          .then(data => setChefs(data))
     }, [])
     

     return (
          <>
          <h2 className='text-info text-center fs-2 pb-4 text-capitalize'>Famous Italian Chefs {chefs.length}</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
               {
                    chefs.map(chef => <Chef
                    key={chef.id}
                    chef = {chef}
                    ></Chef>)
               }
               
          </div>
          </>
     );
};

export default Chefs;
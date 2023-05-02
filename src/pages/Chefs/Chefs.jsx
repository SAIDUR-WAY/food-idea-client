import React, { useEffect, useState } from 'react';
import Chef from './Chef';

const Chefs = () => {
     const [chefs, setChefs] = useState([])
 
     useEffect(()=>{
          fetch("chefs.json")
          .then(res => res.json())
          .then(data => setChefs(data))
     }, [])
     

     return (
          <>
          <h2 className='text-warning text-center fs-2 pb-4 text-capitalize'>Famous Italian Chefs {chefs.length}</h2>
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
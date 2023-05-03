import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
     const location = useLocation()

     const {user, loading} = useContext(AuthContext);

     if(loading){
          return <Spinner animation="grow" variant="primary" />
     }

     if(user){
          return children;
     }

     return <Navigate to='/login' state={{from: location}} replace={true}></Navigate>
};

export default PrivateRoutes;
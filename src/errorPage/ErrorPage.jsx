import React from 'react';
import error from '../assets/404page.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = ({errorMessage}) => {
     return (
          <div className='mx-auto text-center'>
          <h1>Oops! Something went wrong.</h1>
          <p>{errorMessage}</p>
          <img src={error} alt="Error" className=' rounded-circle' />
          <Button className='d-block mx-auto mt-4 bg-info '><Link className='text-decoration-none text-black' to='/'>Back to Home page!</Link></Button>
        </div>
     );
};

export default ErrorPage;
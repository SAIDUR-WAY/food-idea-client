import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
   const {user, logOut} = useContext(AuthContext);
  
   
     return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='my-3'>
      <Container className='fs-5  '>
        <Navbar.Brand className='fs-3 ps-4'><span className='text-warning'>Food</span> Idea</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className='px-4 text-decoration-none text-white' to="/">Home</Link>
            <Link className='px-4 text-decoration-none text-white' to="/chefs">Chef</Link>
            <Link className='px-4 text-decoration-none text-white' to="/register">Register</Link>
            <Link className=' text-decoration-none text-white' to='/login'>Login</Link>
          </Nav>
          <Nav className=''>
            <div className='text-white'>
            {
              user ?
               <> {user?.displayName}
              <img className='mx-2 rounded-circle '  style={{width: '40px', height: '40px'}} src={user && user.photoURL} alt="" />
              <Button onClick={logOut} className='mx-2'><Link className='text-white text-decoration-none'>LogOut</Link></Button>

               </> 
               : 
               <Button ><Link className=' text-decoration-none text-white' to='/login'>Login</Link></Button>
            }
            </div>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
};

export default Header;
import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import ActiveLink from '../../ActiveLink/ActiveLink';


const Header = () => {
  const [userName, setUserName] = useState(false)
  // console.log(userName)
   const {user, logOut} = useContext(AuthContext);

   
     return (
      
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='my-3'>
      <Container className='fs-5  '>
        <Navbar.Brand className='fs-3 ps-4'><span className='text-warning'>Food</span> Idea</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='mx-auto tdn'>
            <ActiveLink className='px-4 text-decoration-none text-white'  to="/" >Home</ActiveLink>
            <ActiveLink className='px-4 text-decoration-none text-white' to="/blog">Blog</ActiveLink>
            <ActiveLink className='px-4 text-decoration-none text-white' to="/register">Register</ActiveLink>
          </Nav>
          <Nav className=''>
            <div className='text-white '>
              <div className=' position-relative d-inline'>

              
            {
              user ?
              <> <span className={userName? 'showInSite': 'd-none'}><span>{user?.displayName}</span></span>
              <div onMouseEnter={()=>setUserName(true)}
                  onMouseLeave={()=>setUserName(false)}
                className='d-inline'><img className=' rounded-circle '  style={{width: '40px', height: '40px'}} src={user && user.photoURL} alt="" /></div>
              <Button onClick={logOut} className='mx-2'><Link className='text-white text-decoration-none'>LogOut</Link></Button>

               </> 
               : 
               <Button ><Link className=' text-decoration-none text-white' to='/login'>Login</Link></Button>
            }
            </div>
            </div>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
};

export default Header;
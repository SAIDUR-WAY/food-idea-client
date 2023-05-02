import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='my-3'>
      <Container className='fs-5  '>
        <Navbar.Brand className='fs-3 ps-4'><span className='text-warning'>Food</span> Idea</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className='px-4 text-decoration-none text-white' to="/">Home</Link>
            <Link className='px-4 text-decoration-none text-white' to="">Chef</Link>
          </Nav>
          <Nav className=''>
            <Link className='px-4 text-decoration-none text-white' to="">More deets</Link>
           <Button ><Link className=' text-decoration-none text-white' to=''>Login</Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
};

export default Header;
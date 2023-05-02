import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Home/Home/Header';
import Footer from '../Home/Home/Footer';
import { Container } from 'react-bootstrap';

const MainLayout = () => {
     return (
          <Container>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
          </Container>
     );
};

export default MainLayout;
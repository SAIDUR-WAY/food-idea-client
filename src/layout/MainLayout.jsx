import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Home/Home/Header';
import Footer from '../Home/Home/Footer';
import { Container } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
     return (
          <Container>
               <Header></Header>
               <Outlet></Outlet>
               <Footer></Footer>
               <Toaster></Toaster>
          </Container>
     );
};

export default MainLayout;
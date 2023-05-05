import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Home/Home/Header';
import Footer from '../Home/Home/Footer/Footer';
import { Container, Spinner } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
     const navigation = useNavigation()
     return (
          <Container>
               <Header></Header>
               <div>{navigation.state === "loading" ? <div><Spinner animation="border" variant="primary" /></div> : ''} </div>
               <Outlet></Outlet>
               <Footer></Footer>
               <Toaster></Toaster>
          </Container>
     );
};

export default MainLayout;
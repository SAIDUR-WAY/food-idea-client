import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import coffee from '../../../assets/logo2.png'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import  './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
   const handleSend= (event)=>{
      //do not reloaded single page
      event.preventDefault()
   }

     return (
          <Container className='text-center text-white  bg-black opacity-75 h-50 py-5 px-5'>
          <Row>
            <Col md={4}>
               <Row>
               <Col className='pb-4' sm={12}> 
               <img width={40} height={40} src={coffee} alt="" />
               <h4 className='pt-3'>Follow us</h4>
               <FaFacebook className='font-icon fs-2 m-2' /> <FaTwitter className='font-icon fs-2 m-2'/> <FaYoutube className='font-icon fs-2 m-2'/>
               </Col>
               <Col sm={12}>
               <h4 className='pb-2'>Address</h4>
               <span className='d-block'>Consorzio Nazionale Imballaggi</span>
               <span>Via Pompeo Litta, 5</span> <br/>
               <span>20122 Milano /ITALY</span>
               </Col>

               </Row>
            </Col>
            <Col md={4}>
            <Row>
               <Col sm={12}>
                    <h4 className='pb-2 pt-4'>Food Items</h4>
                    <ul className= 'list-item fs-5 text-start '>
                         <li><Link>Pasta</Link></li>
                         <li><Link>Risotto</Link></li>
                         <li><Link>Polenta and cured meats</Link></li>
                         <li><Link>Seafood</Link></li>
                         <li><Link>Gelato and Dolce</Link></li>
                         <li><Link>Coffee and famous tipples</Link></li>
                        
                    </ul>
               </Col>
               
               </Row>
            </Col>
            <Col md={4}>
            <Row className='text-start'>
               <Col sm={12}>
                  <h4 className='text-center p-2'>Contact Us</h4>
               <Form onSubmit={handleSend} >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        
        <Form.Control type="number" placeholder="Number" />
      </Form.Group>
      <Form.Group className="mb-3  " height={2} controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <div className='mx-auto text-center'>
      <Button className='px-5 w-100' variant="primary" type="submit">
        Send
      </Button>
      </div>
    </Form>

               </Col>
               
               </Row>
            </Col>
          </Row>
        </Container>
     );
};

export default Footer;
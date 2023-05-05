import React from 'react'
import { Card, Container } from 'react-bootstrap'
import chefImg from '../assets/pngwing.com (6).png'
// import bannarimg from '../assets/bg-banner.jpg'

const Banner = () => {
  return (
    <Container>
       <Card className=" bg-dark text-white">
      {/* <Card.Img src={bannarimg} alt="Card image" /> */}
      <div className="bg bg-dark">
        <div className=" vh-100 bg-dark opacity-75">

        </div>
        <Card.ImgOverlay className="d-md-flex  align-items-center justify-content-around">
        <div>
          <Card.Title className="text-capitalize fs-sm-1" style={{ fontSize: "50px" }}>
            Make Your <br /> <span className="text-warning">dream food</span>{' '}
            <br /> with us
          </Card.Title>

          <Card.Text>
            Cooking and trying new recipes can be an enjoyable experience
          </Card.Text>
        </div>
        <div className=''>
          <Card.Img src={chefImg} alt="" />
        </div>
      </Card.ImgOverlay>
      </div>

     
    </Card>
    </Container>
  )
}

export default Banner

import React from 'react'
import { Card } from 'react-bootstrap'
import chefImg from '../assets/pngwing.com (6).png'

const Banner = () => {
  return (
    <Card className="bg-dark text-white">
      {/* <Card.Img src={banner} alt="Card image" /> */}
      <div className="bg vh-100 bg-dark">
        <div className="vh-100 bg-dark opacity-75"></div>
      </div>

      <Card.ImgOverlay className="d-flex align-items-center justify-content-around">
        <div>
          <Card.Title className="text-capitalize" style={{ fontSize: ' 82px' }}>
            Make Your <br /> <span className="text-warning">dream food</span>{' '}
            <br /> with us
          </Card.Title>

          <Card.Text>
            Cooking and trying new recipes can be an enjoyable experience
          </Card.Text>
        </div>
        <div>
          <img src={chefImg} alt="" />
        </div>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Banner

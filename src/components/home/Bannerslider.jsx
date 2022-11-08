import React from 'react'
import Slider from "react-slick";
// import Card from 'react-bootstrap/Card';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import '../../styles/bannerSlide.scss'

export default function Banner() {


  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    easing: 'cubic',
    dots: true,
  };


  return (

    <div >

      <Slider {...settings} className="banner-slider" >

        <Card className='slider-card' >
            <CardActionArea  >
              <CardMedia
                component="img"
                image="https://previews.123rf.com/images/sssccc/sssccc1303/sssccc130300440/18453612-gems.jpg"
                alt="green iguana"
               
              />
            </CardActionArea>
          </Card>
        <Card className='slider-card' >
            <CardActionArea >
              <CardMedia
                component="img"
                image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
                alt="green iguana"
          
              />
            </CardActionArea>
          </Card>


       



      </Slider >
    </div >
  )
}

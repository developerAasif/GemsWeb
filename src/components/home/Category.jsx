import React from 'react'
import Slider from "react-slick";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import '../../styles/categorySlider.scss';


function Categray({ name, src }) {

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 2
  };


  return (



    <Card className='category-slider' >
      <span className='category-slider-span'>
         <h3>Category</h3> 
         <h4>View All</h4>
         </span>

      <Slider {...settings} >

        <CardActionArea className='category-slider-action'>
          <CardMedia
            className='category-slider-media'
            component="img"
            height="140"
            image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
            alt="green iguana"
          />
          <CardContent style={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizardss
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className='category-slider-action'>
          <CardMedia
            className='category-slider-media'
            component="img"
            height="140"
            image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
            alt="green iguana"
          />
          <CardContent style={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizardss
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className='category-slider-action'>
          <CardMedia
            className='category-slider-media'
            component="img"
            height="140"
            image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
            alt="green iguana"
          />
          <CardContent style={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizardss
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className='category-slider-action'>
          <CardMedia
            className='category-slider-media'
            component="img"
            height="140"
            image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
            alt="green iguana"
          />
          <CardContent style={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizardss
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className='category-slider-action'>
          <CardMedia
            className='category-slider-media'
            component="img"
            height="140"
            image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
            alt="green iguana"
          />
          <CardContent style={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizardss
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className='category-slider-action'>
          <CardMedia
            className='category-slider-media'
            component="img"
            height="140"
            image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
            alt="green iguana"
          />
          <CardContent style={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizardss
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className='category-slider-action'>
          <CardMedia
            className='category-slider-media'
            component="img"
            height="140"
            image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
            alt="green iguana"
          />
          <CardContent style={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizardss
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className='category-slider-action'>
          <CardMedia
            className='category-slider-media'
            component="img"
            height="140"
            image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
            alt="green iguana"
          />
          <CardContent style={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizardss
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className='category-slider-action'>
          <CardMedia
            className='category-slider-media'
            component="img"
            height="140"
            image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
            alt="green iguana"
          />
          <CardContent style={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizardss
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea className='category-slider-action'>
          <CardMedia
            className='category-slider-media'
            component="img"
            height="140"
            image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
            alt="green iguana"
          />
          <CardContent style={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Lizardss
            </Typography>
          </CardContent>
        </CardActionArea>




      </Slider>

    </Card>




  )
}

export default Categray
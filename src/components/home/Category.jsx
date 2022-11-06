import React from 'react'
import Slider from "react-slick";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Categray({ name, src }) {

  var settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };


  return (
    <div className='category'>

      <h2>Category</h2>

      <div>
        <Slider {...settings}>

          <Card sx={{ maxWidth: 400, padding:2, borderRadius:5, alignItems:'center' }} >
            <CardActionArea >
              <CardMedia
                component="img"
                height="140"
                image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
                alt="green iguana"
                style={{border:'2px solid red',height:'250px', width:'250px', borderRadius:'100%'}}
              />
              <CardContent style={{border:'1px solid red', alignItems:'center'}}>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Slider>

      </div>

    </div>
  )
}

export default Categray
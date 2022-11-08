import React from 'react'
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import '../../styles/popularItem.scss';


function PopularItems({ name, src }) {
    

    var settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 2
    };
    const Navigate=useNavigate();


    return (

        <>

            <Card className='category-slider' >
            <span className='category-slider-span'>
                <h3>Popular Items</h3>
                <h4>View All</h4>
            </span>

            <Slider {...settings} style={{marginBottom:20}} >

            {
                [1,2,3,4,5,6,7,8].map(x=>(
                    <Card className='popular-slider'  onClick={()=>(Navigate("/Productdetail"))}>
                    <CardActionArea className='popular-slider-action'>
                        <CardMedia
                            className='popular-slider-media'
                            component="img"
                            height="140"
                            image="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg"
                            alt="green iguana"
                        />
                        <CardContent style={{ display: 'block', alignItems: 'center', textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizardss
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Qty:$5
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Good
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                *******
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                ))
            }

               

                





            </Slider>
            </Card>
        </>




    )
}

export default PopularItems
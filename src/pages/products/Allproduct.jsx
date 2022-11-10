import React from 'react'
// import Slider from "react-slick";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import '../../styles/allproduct.scss';


function Allproduct({ name, src }) {



    return (

        <div className='All-product-container'>

                {
                    [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12].map(x => (
                        <Card className='All-product' >
                            <CardActionArea className='All-product-action'>
                                <CardMedia
                                    className='All-product-media'
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

        </div>




    )
}

export default Allproduct;
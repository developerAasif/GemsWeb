import React from 'react'
import Slider from "react-slick";


export default function Banner() {
  
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (



    <div className='container'>
      <Slider {...settings}>

        <div>
          <img src="https://previews.123rf.com/images/gooboad/gooboad2006/gooboad200600016/149744033-gemstone-background-texture.jpg" alt='diamond' />
        </div>
        <div>
          <img src="https://previews.123rf.com/images/sssccc/sssccc1303/sssccc130300440/18453612-gems.jpg" alt='kl' />
        </div>
        <div>
          <img src="https://previews.123rf.com/images/apirati333/apirati3331205/apirati333120500260/13631990-gemstone-isolated-on-white-background-.jpg" alt='iso' />
        </div>
        <div>
          <img src="https://previews.123rf.com/images/apirati333/apirati3331205/apirati333120500264/13631942-gemstone-isolated-on-white-background-.jpg" alt='nm' />
        </div>

      </Slider>

    </div>
  )
}

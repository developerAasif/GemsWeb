import React from 'react'
import Bannerslider from '../../components/home/Bannerslider'
import Category from '../../components/home/Category';
import PopularItems from '../products/PopularItems'
import Allproduct from '../products/Allproduct'


function Home() {
  return (
    <section className='home-container'>
      <section className='main-sec' >
        <Bannerslider />
        <Category />
        <PopularItems />
      <Allproduct />
      </section>
    </section>
  )
}

export default Home;
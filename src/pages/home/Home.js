import React from 'react'
import Bannerslider from '../../components/home/Bannerslider'
import Category from '../../components/home/Category';
import PopularItems from '../../components/home/PopularItems';

function Home() {
  return (
    <section className='home-container'>
      <section className='main-sec' >
        <Bannerslider />
        <Category />
        <PopularItems />
        </section>
    </section>
  )
}

export default Home;
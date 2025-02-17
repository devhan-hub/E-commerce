import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Helmet from '../components/Helmet/Helmet'
 import HeroImage from '../assets/images/hero-img.png'
 import home from '../styles/home.css'
import {Container , Row , Col} from 'reactstrap'
const Home = () => {
  return <Helmet title={'Home'}>
      <section className='hero_section'>
     <Container>
      <Row>
        <Col lg="6" md="6">
        <div className="hero_content">
          <p className="hero_subtitle">Trending Product in year</p>
          <h2>Make Your Interior More Minimalistic & Modern</h2>
          <p className="lorem20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id a consequatur voluptatum vel ipsum consectetur!</p>
           <motion.button whileTap={{scale:1.2}} className="buy_btn"> <Link to='/shop'>SHOP NOW</Link></motion.button>
          </div>
          </Col>
          <Col lg="6" md="6">
          <div className="hero_img">
            <img src={HeroImage} alt="heroImage" />
          </div>
          </Col>
      </Row>
     </Container>
      </section>
      
    </Helmet >;
  
};

export default Home

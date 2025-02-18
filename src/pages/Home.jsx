import {useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Helmet from '../components/Helmet/Helmet'
 import HeroImage from '../assets/images/hero-img.png'
 import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'
 import home from '../styles/home.css'
import Services from '../servieces/Services'
import ProductList from '../components/UI/ProductList' 
import products from '../assets/data/products'

import {Container , Row , Col} from 'reactstrap'
const Home = () => {
  const year = new Date().getFullYear();
  const [data , setData] = useState([])
  const [bestSaled , setBestSaled]=useState([])
  const [mobileProduct , setMobileProduct]=useState([])
  const [wirelss , setWirless]=useState([])
  const [popularProduct , setPopularProduct] = useState([])

   useEffect(()=>{
   const filterdProducts = products.filter((item)=>item.category === 'chair')
   const filterdBestSaledProducts = products.filter((item)=>item.category === 'sofa')
   const filterdMobileProducts = products.filter((item)=>item.category === 'mobile')
   const filterdWirelssProducts = products.filter((item)=>item.category === 'wireless')
  const  filterdPopularProducts= products.filter((item)=>item.category === 'watch')
  
  setData(filterdProducts)
    setBestSaled(filterdBestSaledProducts);
    setMobileProduct(filterdMobileProducts);
    setWirless(filterdWirelssProducts);
    setPopularProduct(filterdPopularProducts)
   } , [])
  return <Helmet title={'Home'}>
      <section className='hero_section'>
     <Container>
      <Row>
        <Col lg="6" md="6">
        <div className="hero_content">
          <p className="hero_subtitle">Trending Product in {year}</p>
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
       <Services/>
<section className="trending_products">
  <Container>
    <Row>
      <Col lg="12" className='text-center'>
      <h2 className="section_title">Trending Products</h2>
      </Col>
      <ProductList data ={data}/>
    </Row>
  </Container>
</section>
 
  <section className="best_sales">
  <Container>
    <Row>
      <Col lg="12" className='text-center'>
      <h2 className="section_title">Best Sales</h2>
      </Col>
      <ProductList data={bestSaled}/>
    </Row>
  </Container>
  </section>
  <section className="timer-counter">
    <Container>
      <Row>
        <Col lg='6' md='6' className='clock_wrapper_main '>
        <div className="clock_top-content">
          <h4 className="text-white fs-6 mb-2 ">Limited Offers</h4>
          <h3 className="text-white fs-6 mb-2 ">Quality Armchair</h3>
        </div>
        <Clock/>
        <motion.button whileTap={{scale:1.1}} className='buy_btn store_btn btn'>
           <Link to='/shop'>Vist Store</Link>
        </motion.button >
        </Col>

        <Col lg='6' md='6' className='text-end counterImage'>
          <img src={counterImg} alt="counterImg"  />
        </Col>
      </Row>
    </Container>
  </section>

  <section className="new_arival">
  <Container>
    <Row>
      <Col lg="12" className='text-center'>
      <h2 className="section_title">New Arrivals</h2>
      </Col>
      <ProductList data={mobileProduct}/>
      <ProductList data={wirelss}/>
    </Row>
  </Container>
  </section>
  <section className="popular_catagory">
  <Container>
    <Row>
      <Col lg="12" className='text-center mb-5'>
      <h2 className="section_title">Popular Productes</h2>
      </Col>
      <ProductList data={popularProduct}/>
    </Row>
  </Container>
  </section>

    </Helmet >;
  
};

export default Home

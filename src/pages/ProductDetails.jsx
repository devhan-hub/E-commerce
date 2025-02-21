import {Container, Row ,Col} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { useParams } from 'react-router-dom'
import  '../styles/product_detail.css'
import {motion} from 'framer-motion'
import { useState } from 'react'
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductList'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/CartSlice'
import { useRef } from 'react'
import { toast } from 'react-toastify'
const ProductDetails = () => {

  const {id} = useParams();
  const product = products.find(product=>product.id === id)
  const [tab , setTab]= useState('desc')
  const[rating , setRating] = useState();
  const {imgUrl , productName , price , avgRating , reviews , description  ,shortDesc , category } = product
  const  relatedproduct = products.filter(product=> product.category === category)
 const dispatch = useDispatch()
 const reviewName = useRef('');
 const reviewMsg = useRef('');

 const addToCart = () => {
      dispatch(addItem({
         id,
         productName,
         price,
         image:imgUrl
      }))
      toast.success("product successfully added")

  } 

 const handelSubmit = e => {
    e.preventDefault();
   const reviewUserName = reviewName.current.value;
   const reviewuserMsg = reviewMsg.current.value;
 }
  return (
    <div className='pt-5'>
      <Helmet title={productName }>
   <CommonSection  title={productName} />
   <section className="pt-0">
     <Container>
      <Row>
        <Col lg='6'>
        <img src={imgUrl} alt={productName}/>
        </Col>
        <Col lg='6'>
        <div className="product_detail">
          <h2>{productName}</h2>
          <div className='product_rating d-flex align-items-center gap-5 mb-3'>
            <div>
             <span><i class='ri-star-s-fill'></i></span>
             <span><i class='ri-star-s-fill'></i></span>
             <span><i class='ri-star-s-fill'></i></span>
             <span><i class='ri-star-s-fill'></i></span>
             <span><i class='ri-star-half-s-line'></i></span>
             </div>
          
          <p>(<span>{avgRating}</span> rating )</p>
          </div>
         <div className='d-flex align-items-center gap-5'>
         <span className='product_price '>${price}</span>
          <span>Catagory : {category}</span>
         </div>
        <p className='mt-3'>{shortDesc}</p>
        <motion.button onClick={addToCart} whileTap={{scale:1.1}}  className="buy_btn">Add to Cart</motion.button>
        </div>
        </Col>
      </Row>
     </Container>
   </section>
   <section className="product-wrapper">
    <Container>
      <Row>
        <Col lg='12'>
        <div className="product_tab d-flex align-items-center gap-5">
          <h6 onClick={()=>setTab("desc")} className={`${tab === "desc" ? "active_tab" :" " }`}>Description</h6>
          <h6 onClick={()=>setTab("rev")} className={`${tab === 'rev'? 'active_tab':''}`}>Reviwes ({reviews.length})</h6>
        </div>
         {
          tab === "desc" ? (
          <div className="tab_content mt-5">
            <p>{description}</p>
          </div>)
          : (
          <div className='product_review mt-5'> 
           <div className="review_wrapper">
            <ul>
              {reviews.map((item , index)=> (
                <li key={index}>
                  <h6>John Doe</h6>
                  <span>{item.rating} (rating)</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <div className="reviw-form">
              <h1>Share Your Experiance</h1>
              <form action="" onSubmit={handelSubmit}>
                <div className="form-group">
                  <input ref={reviewName} type="text" placeholder="Enter Name"/>
                </div>
                <div className="form-group d-flex align-items-center gap-5">
                  <span onClick={()=> setRating(1)}>1 <i class='ri-star-s-fill'></i></span>
                  <span onClick={()=> setRating(2)}>2 <i class='ri-star-s-fill'></i></span>
                  <span onClick={()=> setRating(3)}>3 <i class='ri-star-s-fill'></i></span>
                  <span onClick={()=> setRating(4)}>4 <i class='ri-star-s-fill'></i></span>
                  <span onClick={()=> setRating(5)}>5 <i class='ri-star-s-fill'></i></span>
                </div>
                <div className="form-group ">
                  <textarea ref={reviewMsg} row={4} type="text" placeholder="Review Message"/>
                </div>
                <button  className="buy_btn" type='submit'>Submit</button>
              </form>
            </div>
           </div>
           </div>
          )
         }
        </Col>
        <Col lg='12' className='mt-5'>
            <h1 className='related-title'>You may also like these</h1>
        </Col>     
        <ProductList data={relatedproduct}/>
      </Row>
    </Container>
   </section>
  </Helmet>
    </div>
  )
}

export default ProductDetails

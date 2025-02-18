import React from 'react'
import "../../styles/product-card.css" 
import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const ProductCard = ({item}) => {
  return (
    <Col lg="3" md="4" className='mb-2'>
          <div className='product_item'>
        <motion.div whileHover={{scale:0.9}} className="product_img">
            <img src={item.imgUrl} alt="productImage" />
        </motion.div>
          <div className="p-2 product_info">
          <h3 className="product_name"><Link to={`/shope/${item.id}`}>{item.productName}</Link></h3>
          <span className=''>{item.category}</span>
          </div>
        <div className="poduct_card-bottom d-flex align-items justify-between p-2 ">
            <span className="price">${item.price}</span>
            <motion.span whileTap={{scale:1.2}}>
                <i class="ri-add-line"></i>
            </motion.span>
        </div>
      
    </div>
    </Col>
  )
}

export default ProductCard

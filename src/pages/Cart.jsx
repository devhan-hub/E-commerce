import {Container , Row , Col} from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { useSelector , useDispatch } from 'react-redux'
import {  removeItem} from '../redux/slices/CartSlice'
import {motion}   from 'framer-motion'
import '../styles/cart.css'
import { Link } from 'react-router-dom'
const Cart = () => {
 const dispatch = useDispatch();
 const cartItems = useSelector(state=>state.cart.cartItems)
 const totalAmount = useSelector(state=>state.cart.totalAmount)

  return (
  <Helmet title="Cart">
    <CommonSection title ="Shopping Cart"/>
     <Container>
      <Row>
        <Col lg="9">
        {
          cartItems.length ===0 ? <h2 className='text-center'>No item added to the cart</h2> :
          <table className='bordered table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              cartItems.map((item , index)=> (
                 <tr key ={index}>
                  <td className='cart_image'> <img src={item.imgUrl} alt={item.productName} />
                    </td>
                  <td>{item.productName}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td onClick={(()=>dispatch(removeItem(item.id)))}>
                    <motion.i whileTap={{scale:1.2}} class ='ri-delete-bin-line'></motion.i>
                  </td>
                 </tr>

              ))
            }
          </tbody>
        </table>
        }
         </Col>
        {  cartItems.length > 0 &&
          <Col lg='3'>
          <div className=''>
          <h6 className='d-flex align-items-center justify-content-between '>Subtotal
          <span className='fs-4 fw-bold'>${totalAmount}</span>
          </h6>
          </div>
         <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
         <div className=''>
           <button className='buy_btn w-100'>
             <Link to='/checkout'>Checkout</Link>
           </button>
           
           <button className='buy_btn w-100 mt-3'>
             <Link to='/shop'>Continue Shopping</Link>
           </button>
         </div>
         </Col>}

      </Row>
     </Container>
    </Helmet>
  )
}

export default Cart

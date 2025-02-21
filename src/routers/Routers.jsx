import { Routes ,Route } from 'react-router-dom'
import Shope from '../pages/Shope'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import { Navigate } from 'react-router-dom'
const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="home"/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='shop' element={<Shope/>}/>
      <Route path='product/:id' element={<ProductDetails/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>

    </Routes>
  )
}

export default Routers

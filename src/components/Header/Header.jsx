import React from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo  from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import {Container , Row} from "reactstrap"

const nav_links =[
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  }
]

const Header = () => {
  return (
    <header className='header'>
    <Container>
      <Row>
        <div className="nav_wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <div className='logo_description'>
              <h1>Multimart</h1>
              {/* <p>Since 195</p> */}
            </div>
          </div>
      
     <nav>
      <ul className="menu">
        {
          nav_links.map((item , index)=>(
            <li className="nav_item" key={index}>
            <NavLink to={item.path} className={(navClass)=>navClass.isActive?'nav_active':''} >{item.display}</NavLink>
          </li>
          ))
        }
      </ul>
     </nav>

     <div className="nav_icons">
      <span className="fav_icon icon">
      <span className="badge">1</span>
      <i class="ri-heart-line"></i>
      </span>
      <span className="cart_icon icon">
      <i class="ri-shopping-bag-line"></i>
      <span className="badge">1</span>
      </span>
      <motion.span whileTap={{scale:1.2}} className="user">
        <img  src={userIcon} alt="user" />
      </motion.span>
     </div>

     <div className="mobile_menu">
     <i class="ri-menu-line"></i>
     </div>

        </div>
      </Row>
    </Container>
    </header>
  )
}

export default Header

import React, { useRef, useEffect } from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { Container, Row } from "reactstrap"
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
const nav_links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  }
]

const Header = () => {
  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  const navigate = useNavigate();

  useEffect(()=>{
     const stickyHeaderFunc=()=> {
      if(window.scrollY > 80) {
        headerRef.current.classList.add('sticky_header')
      }
      else {
        headerRef.current.classList.remove('sticky_header')

      }

     } 

     window.addEventListener("scroll" ,stickyHeaderFunc)
     return ()=> window.removeEventListener('scroll' , stickyHeaderFunc)
  } ,[])

  const  menuToggle =()=> menuRef.current.classList.toggle('active_menu')


  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div className='logo_description'>
                <h1>Multimart</h1>
              </div>
            </div>

            <nav ref={menuRef} onClick={menuToggle}>
              <ul className="menu" >
                {
                  nav_links.map((item, index) => (
                    <li className="nav_item" key={index}>
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''} >{item.display}</NavLink>
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
              <span className="cart_icon icon" onClick={()=> navigate('/cart')}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <motion.span whileTap={{ scale: 1.2 }} className="user">
                <img src={userIcon} alt="user" />
              </motion.span>
            <div className='mobile_menu' onClick={menuToggle}>
              <span >
              <i class="ri-menu-line"></i>
            </span>
            </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header

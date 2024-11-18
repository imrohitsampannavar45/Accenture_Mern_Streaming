import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='list'>
        <li className='text1'>
          <Link to="/products">Products</Link>
        </li>
        <li className='text1'>
          <Link to="/about">About</Link>
        </li>
        <li className='text1'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

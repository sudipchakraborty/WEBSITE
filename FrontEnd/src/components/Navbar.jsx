import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='NavWrapper'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='Login'>Login</NavLink>
      <NavLink to='About'>About</NavLink>
      <NavLink to='Contact'>Contact</NavLink>
      <NavLink to='Product'>Product</NavLink>
      <NavLink to='Detail'>Detail</NavLink>
      <NavLink to='register'>register</NavLink>
      <NavLink to='todo'>ToDo</NavLink>
      <NavLink to='SmartDoor'>Smart Door</NavLink>
    </div>
  )
}
export default Navbar

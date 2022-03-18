import React from 'react'
import Logo from '../assets/vulnerApp_logo.png'
import { NavLink } from 'react-router-dom'
import '../styles/NavMenu.scss'

export const NavMenu = () => {

  return (
    <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <img src={Logo} alt="Logo" />
          </li>
          <li className='nav-item'>
            <NavLink to="/admin" className='link'>Admin</NavLink>
          </li>
        </ul>
    </nav>
  )
}

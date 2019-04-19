import './Logo.css'
import logo from '../../assets/images/pepelogo-1.png'
import React from 'react'


export default props => 
  <aside className="logo">
    <a href="/" className="logo">
      <img src={logo} alt="Logo" />
    </a>
  </aside>
import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {
  return (
    <>
    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/product">Product</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/admin">Dashboard</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/admin/product">Manager Product</NavLink>
      </li>



    </ul> */}
      {/* <div></div> */}
      <li className="scroll-to-section">
      <NavLink className="nav-link" aria-current="page" to="/"><a href="#top" className="active">Home</a></NavLink>
      </li>
      <li className="scroll-to-section">
      <NavLink className="nav-link" to="/product">Product</NavLink>
      </li>
      {/* <li className="scroll-to-section">
      <NavLink className="nav-link" to="/">About Us</NavLink>
      </li> */}
      <li className="scroll-to-section">
      <NavLink className="nav-link" to="/">Contact Us</NavLink>
      </li>
      <li className="scroll-to-section">
      <NavLink className="nav-link" to="/">Giỏ hàng</NavLink>
      </li>
      <li className="scroll-to-section">
      <NavLink className="nav-link" to="/admin">Dashboard</NavLink>
      </li>
      <li className="scroll-to-section">
      <NavLink className="nav-link" to="/admin/product">Manager Product</NavLink>
      </li>
    </>



  )
}

export default Menu
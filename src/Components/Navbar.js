import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navb">
            <NavLink to={"/home"} className="navc">Home</NavLink>
            <NavLink to={"/about"} className="navc">About Us</NavLink>
            <NavLink to={"/contact"} className="navc">Contact Us</NavLink>
            <NavLink to={"/help"} className="navc">Help</NavLink>
    </div>
  )
}

export default Navbar;

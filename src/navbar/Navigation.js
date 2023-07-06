import { Nav, Navbar, NavLink } from "react-bootstrap";
import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { SlEnvolopeLetter } from 'react-icons/sl';
export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Navbar.Collapse id="navbarScroll">
    <Nav>
      <div className="nav">
           <p className="title"><SlEnvolopeLetter/>&nbsp;<b>Job</b><b className="hunt">Hunt</b></p>
           <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
           <NavLink  eventKey="2" as={Link} to="/about">About</NavLink>
           <NavLink  eventKey="3" as={Link} to="/jobs">Jobs</NavLink>
           <NavLink  eventKey="4" as={Link} to="/service">Services</NavLink>
           <NavLink  eventKey="5" as={Link} to="/contactus">Contact Us</NavLink>
           <NavLink  eventKey="6" as={Link} to="/login" className="login">Login</NavLink>
           <NavLink  eventKey="7" as={Link} to="/register" className="register">Register</NavLink>
      </div>
    </Nav>
    </Navbar.Collapse>    
    </Navbar>
  )
}



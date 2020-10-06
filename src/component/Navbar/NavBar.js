import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./NavBar.css";
import Logo from '../../images/Logo.png';
import { Link } from 'react-router-dom';
const NavBar = () => {


    return (
        <Navbar bg="transparent " expand="lg" className="navStyle">
            <Navbar.Brand className="logo" ><img className="img" src={Logo} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav " className="menu">      
            <Form  >
              <input className="search"  type="search" placeholder="Search your destination" id=""/>
            </Form>
                <Nav className="mr-auto menuName">
                <ul className="ul">
                    <li><Link to ="/news">News</Link></li>
                    <li><Link to ="/destination">Destination</Link></li>
                    <li><Link to = "/blog">Blog</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                    <li><Link to = "/login">Login</Link></li>
                </ul>
            </Nav>
        </Navbar.Collapse>
</Navbar>
    );
};

export default NavBar;
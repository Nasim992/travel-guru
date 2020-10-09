import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "../Navbar/NavBar.css";
import "./NavBarBlack.css"
import Logo from '../../images/Logo.png';
import { Link, useHistory } from 'react-router-dom';

const NavBars = () => {
    const history = useHistory();
    
    const handleHome = () => {
        history.push("/home")
    }

    return (
        <Navbar bg="transparent " expand="lg" className="navStyle">
            <Navbar.Brand className="logo" onClick={handleHome}><img src={Logo} alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
                
            <Form className="search"  >
            </Form>
                <Nav className="mr-auto menuName">
                <ul>
                    <li><Link to ="/news">News</Link></li>
                    <li><Link to ="/destination">Destination</Link></li>
                    <li><Link to = "/blog">Blog</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                    <li><Link to = "/login2">LogIn</Link></li>
                </ul>
            </Nav>
        </Navbar.Collapse>
</Navbar>
    );
};

export default NavBars;
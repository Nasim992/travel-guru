import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';
import LoginWithOther from '../LoginWithOther/LoginWithOther';
import './LogIn.css';

const LogIn = () => {
    return (
        
        <div style={{ align: 'center' }}>
            <NavBar></NavBar>
            <div id="form">
                <div style={{ margin: '20px 50px' }}>
                    <h3>Log In</h3>
                    <form >
                        
                        <input type="email" name="email"  id="" placeholder="Username or Email" />
                        <input type="password" name="password" id="" placeholder="password"/>
                          
                        <input  type="submit" value="Log In" />
                            <span>Don't have an Account? </span>
                            <Link style={{ color: '#F9A51A' }} to="/create">Create a new account</Link>
                    </form>
                </div>
            </div>
        <LoginWithOther></LoginWithOther>
        </div>
    );
};

export default LogIn;
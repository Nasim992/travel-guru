import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import NavBarBlack from '../NavBarBlack/NavBarBlack'; 
import LoginWithOther from '../LoginWithOther/LoginWithOther';
import './LogIn.css';
import firebaseConfig from '../../firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Context } from '../../App';
const LogIn = () => {

    let history  = useHistory();
    let location = useLocation();
    let {from} = location.state || { from : {pathname : "/"}};

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }

    const {userElement} = useContext(Context);
    const [user , setUser ] = userElement;
    const handleLogin = (event) => {
        if (user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email,user.password)
            .then (response=>{
                const newUserInfo = {...user};
                newUserInfo.error = " "
                setUser(newUserInfo)
                history.replace(from);
            })
            .catch(error =>{
                var errorMessage = error.message;
                const newError = {...user};
                newError.error = errorMessage;
                newError.success = '';
                setUser(newError)
            })

        }
        event.preventDefault();
        
    } 
    return (
        
        <div style={{ align: 'center' }}>
            <NavBarBlack></NavBarBlack>
            <div id="form">
                <div style={{ margin: '20px 50px' }}>
                    <h3>Log In</h3>
                    <form onSubmit={handleLogin}>
                        
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
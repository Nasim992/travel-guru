import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import LoginWithOther from '../LoginWithOther/LoginWithOther';
import { Context } from '../../App';
import * as firebase from "firebase/app";
import firebaseConfig from '../../firebase.config';
import "firebase/auth";
import NavBarBlack from '../NavBarBlack/NavBarBlack';
import './SignUp.css';
const SignUp = () => {
    const history = useHistory();
    const{userElement} = useContext(Context);
    const [user, setUser] = userElement;

    const onBlur = (event) => {
        let isFieldValid = true;
        var firstName = '';
        var lastName = '';
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
             isFieldValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(event.target.value);
            
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        } else {
            alert(' enter a password more then 6 ,one capital,small and special character');
        }
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        

    }
    const handleCreate = () => {
        history.push('/login')
    }
    
    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(result => {
                    
                const newUserInfo = { ...user };
                    newUserInfo.error = "";
                    setUser(newUserInfo)
                    console.log('user created')
            })
            
            .catch(function (error) {
            // Handle Errors here.
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                setUser(newUserInfo)
            // ...
            });
            history.push("/login")
        }
        e.preventDefault();
    }
    return (
        <div>
            <NavBarBlack></NavBarBlack>
            <div id="form">
                <div style={{ margin: '20px 50px' }}>
                    <h3>Log Up</h3>
                    <p style={{color:'red'}}>{user.error}</p>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text"  onBlur={onBlur} name="name1" placeholder="FirstName" required />
                        <input type="text" required onBlur={onBlur} name="name2" placeholder="LastNAme" />
                        <input type="email" required onBlur={onBlur} name="email" placeholder="Your Email " />
                        <input type="password" required onBlur={onBlur} name="password" placeholder="Password" />
                        <input onSubmit={handleCreate} type="submit" value="Create Account" />
                        <span>Already have an account?</span>
                        
                        <Link style={{ color: '#F9A51A' }} to="/signup/login">Log in</Link>
                    </form>
                </div>
            </div>
            <LoginWithOther></LoginWithOther>
        </div>
    );
};

export default SignUp;
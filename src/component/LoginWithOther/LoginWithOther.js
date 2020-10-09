import React, { useContext } from 'react';
import './LoginWithOther.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 
'react-router-dom';
import { Context } from '../../App';
import firebaseConfig from '../../firebase.config';


const LoginWithOther = () => {

    const { userElement } = useContext(Context);
    const [user, setUser] = userElement;
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
            const { displayName,email } = result.user;
            const signedInUser = { name: displayName,email };
            setUser(signedInUser);
                history.replace(from);
          }).catch(function(error) {
              var errorMessage = error.message;
              console.log(errorMessage);
          });
    }

    
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookLogin = () => {
        firebase.auth().signInWithPopup(facebookProvider)
            .then((result) => {
                console.log(result.user)
                history.replace(from);
          }).catch(function(error) {
              var errorMessage = error.message;
          });
        
    }

    return (
        <div>
        <div className="loginWithSocial">
            <p> <i></i> or <i></i></p>
            <button onClick={handleFacebookLogin}> <span >Continue With Facebook</span></button>
            <button onClick={handleGoogleLogin} > <span>Continue With Google</span></button>
        </div> 
    </div>
    );
};

export default LoginWithOther;
import React from 'react';
import './signin.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './f_base/config';
import { useUserAuth } from '../../provider/context'
import { useNavigate } from 'react-router-dom';
function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, register } = useUserAuth();
    const navigate = useNavigate("");

    const loginIn = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    }
    const registerAccount = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className='signin--page'>
            <div className="signin--header">
                <div className='signin--headerLogo'>
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
                </div>
            </div>
            <div className='signin--form'>
                <h1>Sign In</h1>
                <div className="signin--form--fields">
                    <input className='signin--field'
                        value={email}
                        id='field--email'
                        type="email"
                        placeholder='Email or number phone'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='signin--field'
                        value={password}
                        id='field--password'
                        type="password"
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className='signin--button' onClick={loginIn} >Sign in</button>
                <div className="remember">
                    <div className="remember-me">
                        <input type="checkbox" />
                        <p>Remember me</p>
                    </div>
                    <a href='/signin'>Need help?</a>
                </div>
                <div className="signin--facebook-login">
                    <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="" />
                    <span>Login with facebook</span>
                </div>
                <div className="signup">
                    <p>New to Netflix?</p>
                    <span onClick={registerAccount}>Sign up now</span>
                </div>
            </div>
            <div className="signin--page--vertical"></div>
        </div>
    );
}
export default SignIn;
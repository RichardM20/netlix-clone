import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    let navigate = useNavigate();
    const nav = () => {
        navigate('/signin')
    }
    return (
        <div className='landing--page'>
            <div className="landing--header">
                <div className='landing--headerLogo'>
                    <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
                </div>
                <div className="landing--loginButton">
                    <button onClick={() => nav()} >Sign in</button>
                </div>
            </div>
            <div className='landing--info'>
                <p>Unlimited movies, TV<br />shows and more.</p>
                <p>Watch anywhere. Cancel anytime.</p>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div className='landing--footer'>
                    <input className='landing--inputEmail' type="email" placeholder='Enter your email' />
                    <button className='landing--buttonGetstarted'>Get Started</button>
                </div>
            </div>
            <div className="landing--page--vertical"></div>
        </div>
    );
}


export default Login;
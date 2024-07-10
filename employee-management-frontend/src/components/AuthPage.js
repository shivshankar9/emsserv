// src/components/AuthPage.js
import React, { useState } from 'react';
import { signInWithGoogle } from '../firebaseConfig';
import './AuthPage.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-page">
            <div className="auth-header">
                <h1>{isLogin ? 'Login' : 'Register'}</h1>
                <p>Manage your workforce efficiently with our intuitive tools.</p>
            </div>
            <div className="auth-buttons">
                <button onClick={signInWithGoogle} className="google-btn">Sign in with Google</button>
            </div>
            <div className="auth-form">
                {isLogin ? (
                    <div>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className="btn">Login</button>
                    </div>
                ) : (
                    <div>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className="btn">Register</button>
                    </div>
                )}
            </div>
            <div className="auth-toggle">
                <p onClick={toggleAuthMode}>
                    {isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}
                </p>
            </div>
            <div className="animation">
                <div className="circle"></div>
                <div className="circle delay"></div>
                <div className="circle delay-2"></div>
            </div>
        </div>
    );
};

export default AuthPage;

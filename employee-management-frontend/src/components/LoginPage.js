// src/components/LoginPage.js
import React from 'react';
import { signInWithGoogle } from '../firebaseConfig';
import './AuthPage.css';

const LoginPage = () => {
    return (
        <div className="auth-page">
            <div className="auth-header">
                <h1>Login</h1>
                <p>Manage your workforce efficiently with our intuitive tools.</p>
            </div>
            <div className="auth-buttons">
                <button onClick={signInWithGoogle} className="google-btn">Sign in with Google</button>
            </div>
            <div className="auth-form">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="btn">Login</button>
            </div>
            <div className="auth-toggle">
                <p><a href="/register">Don't have an account? Register</a></p>
            </div>
            <div className="animation">
                <div className="circle"></div>
                <div className="circle delay"></div>
                <div className="circle delay-2"></div>
            </div>
        </div>
    );
};

export default LoginPage;

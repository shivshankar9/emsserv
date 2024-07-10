// src/components/RegisterPage.js
import React from 'react';
import { signInWithGoogle } from '../firebaseConfig';
import './AuthPage.css';

const RegisterPage = () => {
    return (
        <div className="auth-page">
            <div className="auth-header">
                <h1>Register</h1>
                <p>Manage your workforce efficiently with our intuitive tools.</p>
            </div>
            <div className="auth-buttons">
                <button onClick={signInWithGoogle} className="google-btn">Sign in with Google</button>
            </div>
            <div className="auth-form">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="btn">Register</button>
            </div>
            <div className="auth-toggle">
                <p><a href="/login">Already have an account? Login</a></p>
            </div>
            <div className="animation">
                <div className="circle"></div>
                <div className="circle delay"></div>
                <div className="circle delay-2"></div>
            </div>
        </div>
    );
};

export default RegisterPage;

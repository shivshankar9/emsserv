// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import { signInWithGoogle } from '../firebaseConfig';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="landing-page">
            <div className="landing-header">
                <h1>Welcome to Employee Management System</h1>
                <p>Manage your workforce efficiently with our intuitive tools.</p>
            </div>
            <div className="landing-buttons">
                <button onClick={signInWithGoogle} className="google-btn">Sign in with Google</button>
                <button className="btn" onClick={() => navigate('/login')}>Login</button>
                <button className="btn" onClick={() => navigate('/register')}>Register</button>
            </div>
            <div className="animation">
                <div className="circle"></div>
                <div className="circle delay"></div>
                <div className="circle delay-2"></div>
            </div>
        </div>
    );
};

export default LandingPage;

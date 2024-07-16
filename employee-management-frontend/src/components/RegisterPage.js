// src/components/RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Reusing the landing page styles
import { signInWithGoogle } from '../firebaseConfig';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register', { email, password });
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(navigate);
    };

    return (
        <div className="landing-page">
            <div className="landing-header">
                <h2>Create an Account</h2>
                <p>Join our Employee Management System</p>
            </div>
            <form className="landing-form" onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="btn" type="submit">Register</button>
            </form>
            <div className="alternative-option">
                <button onClick={handleGoogleSignIn} className="google-btn">Sign in with Google</button>
                <p>Already have an account? <span className="link" onClick={() => navigate('/login')}>Login</span></p>
            </div>
        </div>
    );
};

export default RegisterPage;

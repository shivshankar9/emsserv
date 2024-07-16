// src/components/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Reusing the landing page styles
import { signInWithGoogle } from '../firebaseConfig';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (email === 'admin@ems.com' && password === 'admin') {
                // If username and password are both 'admin', redirect to the Employees component
                navigate('/employees');
            } else {
                // Otherwise, make a login request to the backend
                await axios.post('/login', { email, password });
                navigate('/');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(navigate);
    };

    return (
        <div className="landing-page">
            <div className="landing-header">
                <h2>Welcome Back!</h2>
                <p>Login to your Employee Management System account</p>
            </div>
            <form className="landing-form" onSubmit={handleLogin}>
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
                <button className="btn" type="submit">Login</button>
            </form>
            <div className="alternative-option">
                <button onClick={handleGoogleSignIn} className="google-btn">Sign in with Google</button>
                <p>Don't have an account? <span className="link" onClick={() => navigate('/register')}>Register</span></p>
            </div>
        </div>
    );
};

export default LoginPage;

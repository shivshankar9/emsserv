import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Reusing the landing page styles

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/login', { email, password });
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
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
                <p>Don't have an account? <span className="link" onClick={() => navigate('/register')}>Register</span></p>
            </div>

        </div>
    );
};

export default LoginPage;

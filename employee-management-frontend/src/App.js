import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import EmployeeList from './components/EmployeeList';
import RegisterPage from './components/RegisterPage';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import ViewProfile from './components/ViewProfile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/add-employee" element={<AddEmployee />} />
                <Route path="/edit-employee/:id" element={<EditEmployee />} />
                <Route path="/view-profile/:id" element={<ViewProfile />} />
            </Routes>
        </Router>
    );
}

export default App;

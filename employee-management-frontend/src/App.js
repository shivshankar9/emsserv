// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import EmployeeList from './components/EmployeeList';
import RegisterPage from './components/RegisterPage';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import ViewProfile from './components/ViewProfile';
import EmployeeDetails from './components/EmployeeDetails';
import EditProfile from './components/EditProfile';
import ViewSchedule from './components/ViewSchedule';
import ViewPayments from './components/ViewPayments';
import ViewLeaveRequests from './components/ViewLeaveRequests';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/employees" element={<EmployeeList />} />
                    <Route path="/add-employee" element={<AddEmployee />} />
                    <Route path="/edit-employee/:id" element={<EditEmployee />} />
                    <Route path="/view-profile/:id" element={<ViewProfile />} />
                    <Route path="/employee-details" element={<EmployeeDetails />} />
                    <Route path="/edit-profile" element={<EditProfile />} />
                    <Route path="/view-schedule" element={<ViewSchedule />} />
                    <Route path="/view-payments" element={<ViewPayments />} />
                    <Route path="/view-leave-requests" element={<ViewLeaveRequests />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

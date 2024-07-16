// src/components/EmployeeDetails.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeDetails.css';

const EmployeeDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="employee-dashboard container">
            <div className="dashboard-header">
                <h1>Employee Dashboard</h1>
                <p>Welcome to your dashboard. Here you can view and manage your details.</p>
            </div>
            <div className="dashboard-content">
                <div className="profile-card">
                    <h2>Profile Details</h2>
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Email:</strong> john.doe@example.com</p>
                    <p><strong>Role:</strong> Software Engineer</p>
                    <p><strong>Salary:</strong> $80,000</p>
                    <p><strong>Address:</strong> 1234 Elm St, Springfield</p>
                    <button className="btn" onClick={() => navigate('/edit-profile')}>Edit Profile</button>
                </div>

                <div className="timeline-card">
                    <h2>Timeline in Company</h2>
                    <ul>
                        <li>Joined: January 2021</li>
                        <li>Promoted to Software Engineer: January 2023</li>
                        <li>Current Manager: Jane Smith</li>
                    </ul>
                    <button className="btn" onClick={() => navigate('/view-schedule')}>View Schedule</button>
                </div>

                <div className="options-card">
                    <h2>Other Options</h2>
                    <button className="btn" onClick={() => navigate('/view-payments')}>View Payments</button>
                    <button className="btn" onClick={() => navigate('/view-leave-requests')}>View Leave Requests</button>
                </div>

                <div className="charts-container">
                    <h2>Performance Overview</h2>
                    <div className="charts">
                        <div className="chart">
                            <h3>Attendance Rate</h3>
                            {/* Placeholder for attendance chart */}
                            <div className="chart-placeholder">[Attendance Chart]</div>
                        </div>
                        <div className="chart">
                            <h3>Project Completion Rate</h3>
                            {/* Placeholder for project completion chart */}
                            <div className="chart-placeholder">[Completion Chart]</div>
                        </div>
                    </div>
                </div>

                <div className="documents-container">
                    <h2>Documents</h2>
                    <ul className="documents-list">
                        <li><a href="#employee-contract">Employee Contract</a></li>
                        <li><a href="#performance-reviews">Performance Reviews</a></li>
                        <li><a href="#payroll-documents">Payroll Documents</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;

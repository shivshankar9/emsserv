import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeDetails.css';
import EmployeeService from './EmployeeService'; // Adjust path if necessary

const EmployeeDetails = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const employeeId = sessionStorage.getItem('employeeId'); // Simulating fetching logged-in user ID from session storage
                if (!employeeId) {
                    setError('No employee ID found');
                    setLoading(false);
                    return;
                }
                const response = await EmployeeService.getEmployeeById(employeeId);
                setEmployee(response.data);
            } catch (err) {
                setError('Failed to fetch employee data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployeeData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="employee-dashboard container">
            <div className="dashboard-header">
                <h1>Employee Dashboard</h1>
                <p>Welcome to your dashboard, {employee?.firstName}.</p>
            </div>
            <div className="dashboard-content">
                <div className="profile-card">
                    <h2>Profile Details</h2>
                    <p><strong>Name:</strong> {employee.firstName} {employee.lastName}</p>
                    <p><strong>Email:</strong> {employee.emailId}</p>
                    <p><strong>Role:</strong> {employee.role.roleName}</p>
                    <p><strong>Salary:</strong> ${employee.salary}</p>
                    <p><strong>Address:</strong> {employee.address}</p>
                    <button className="btn" onClick={() => navigate('/edit-profile')}>Edit Profile</button>
                </div>

                <div className="timeline-card">
                    <h2>Timeline in Company</h2>
                    <ul>
                        <li>Joined: {employee.joinDate}</li>
                        <li>Promoted to {employee.role.roleName}: {employee.promotionDate}</li>
                        <li>Current Manager: {employee.manager}</li>
                    </ul>
                    <button className="btn" onClick={() => navigate('/view-schedule')}>View Schedule</button>
                </div>

                {/* Other sections like Payments and Documents can also be rendered similarly */}
            </div>
        </div>
    );
};

export default EmployeeDetails;

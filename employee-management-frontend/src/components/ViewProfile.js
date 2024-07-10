import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AuthPage.css';

const ViewProfile = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/employees/${id}`);
                setEmployee(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching employee:', error);
                setLoading(false);
            }
        };

        fetchEmployee();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Employee Profile</h1>
            {employee ? (
                <div>
                    <p><strong>Name:</strong> {employee.firstName} {employee.lastName}</p>
                    <p><strong>Email:</strong> {employee.emailId}</p>
                    <p><strong>Phone number:</strong> {employee.phoneNo}</p>
                    <p><strong>Job Title:</strong> {employee.role}</p>
                    <p><strong>Address:</strong> {employee.address}</p>
                    <p><strong>Salary:</strong> {employee.salary}</p>
                    {/* Add more fields as needed */}
                </div>
            ) : (
                <p>Employee not found</p>
            )}
        </div>
    );
};

export default ViewProfile;

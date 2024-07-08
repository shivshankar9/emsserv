import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({ name: '', email: '', jobTitle: '' });

    useEffect(() => {
        // Fetch the employee data based on the ID
        // For now, we'll just use dummy data
        const fetchedEmployee = { name: 'John Doe', email: 'john@example.com', jobTitle: 'Software Engineer' };
        setEmployee(fetchedEmployee);
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to update the employee
        console.log({ id, ...employee });
        navigate('/employees');
    };

    return (
        <div>
            <h1>Edit Employee</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Employee Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Employee Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={employee.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Employee Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        className="form-control"
                        value={employee.jobTitle}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Employee</button>
            </form>
        </div>
    );
};

export default EditEmployee;

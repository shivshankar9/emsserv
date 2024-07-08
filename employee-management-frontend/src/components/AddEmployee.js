import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEmployee = {
            name: name,
            email: email,
            jobTitle: jobTitle
        };

        try {
            const response = await fetch('http://localhost:8080/api/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEmployee)
            });

            if (!response.ok) {
                throw new Error('Failed to add employee');
            }

            // Reset form fields after successful submission
            setName('');
            setEmail('');
            setJobTitle('');

            // Navigate to the employees list page
            navigate('/employees');
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <div>
            <h1>Add Employee</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Employee Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Employee Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Employee Job Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;

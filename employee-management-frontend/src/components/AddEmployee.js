import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from './EmployeeService';

const AddEmployee = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNo, setphoneNo] = useState('');
    const [emailId, setemailId] = useState('');
    const [role, setRole] = useState('');
    const [salary, setSalary] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEmployee = {
            firstName,
            lastName,
            emailId,
            phoneNo,
            role,
            salary: parseInt(salary), // Convert salary to number
            address
        };

        try {
            await EmployeeService.createEmployee(newEmployee);
            // Reset form fields after successful submission
            setFirstName('');
            setLastName('');
            emailId(''),
            phoneNo(''),
            setRole('');
            setSalary('');
            setAddress('');
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
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Role</label>
                    <input
                        type="text"
                        className="form-control"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                                    <label>emailId</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setemailId(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                <label>phone No</label>
                                      <input

                                                        type="text"
                                                        className="form-control"
                                                        value={phoneNo}
                                                        onChange={(e) => setphoneNo(e.target.value)}
                                                        required
                                                    />
                                                </div>
                <div className="form-group">
                    <label>Salary</label>
                    <input
                        type="number"
                        className="form-control"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;

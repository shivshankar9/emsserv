import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/employees');
            if (!response.ok) {
                throw new Error('Failed to fetch employees');
            }
            const data = await response.json();
            setEmployees(data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleDeleteEmployee = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/employees/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete employee');
            }
            const updatedEmployees = employees.filter(emp => emp.id !== id);
            setEmployees(updatedEmployees);
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <div>
            <h1>Employees List</h1>
            <Link to="/add-employee" className="btn btn-primary mb-3">Add Employee</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Email</th>
                        <th>Employee Job Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.jobTitle}</td>
                            <td>
                                <Link to={`/edit-employee/${employee.id}`} className="btn btn-secondary mr-2">Edit</Link>
                                <button className="btn btn-danger" onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeList;

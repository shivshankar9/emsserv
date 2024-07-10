import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from './EmployeeService';
import ViewProfile from './ViewProfile';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await EmployeeService.getEmployees();
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const handleDeleteEmployee = async (id) => {
        try {
            await EmployeeService.deleteEmployee(id);
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
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Employee Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.role}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.address}</td>
                            <td>
                                <Link to={`/view-profile/${employee.id}`} className="btn btn-info mr-2">View Profile</Link>
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

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import ViewProfile from './components/ViewProfile';

function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="/employees" element={<EmployeeList />} />
                    <Route path="/add-employee" element={<AddEmployee />} />
                    <Route path="/edit-employee/:id" element={<EditEmployee />} />
                    <Route path="/view-profile/:id" element={<ViewProfile />} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;

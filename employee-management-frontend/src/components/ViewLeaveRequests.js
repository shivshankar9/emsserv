// src/components/ViewLeaveRequests.js
import React from 'react';
import './ViewLeaveRequests.css';

const ViewLeaveRequests = () => {
    const leaveRequests = [
        { date: "2023-03-01", reason: "Personal" },
        { date: "2023-06-15", reason: "Vacation" },
        // Add more requests as needed
    ];

    return (
        <div className="view-leave-requests">
            <h2>Your Leave Requests</h2>
            <ul>
                {leaveRequests.map((request, index) => (
                    <li key={index}>
                        {request.date}: {request.reason}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewLeaveRequests;

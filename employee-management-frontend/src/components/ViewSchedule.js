// src/components/ViewSchedule.js
import React from 'react';
import './ViewSchedule.css';

const ViewSchedule = () => {
    const schedule = [
        { day: "Monday", tasks: ["Team meeting", "Project work"] },
        { day: "Tuesday", tasks: ["Code Review", "Documentation"] },
        { day: "Wednesday", tasks: ["Development", "Standup"] },
        // Add more days as needed
    ];

    return (
        <div className="view-schedule">
            <h2>Your Weekly Schedule</h2>
            <div className="schedule-table">
                {schedule.map((item, index) => (
                    <div key={index} className="schedule-row">
                        <strong>{item.day}:</strong>
                        <ul>
                            {item.tasks.map((task, idx) => (
                                <li key={idx}>{task}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewSchedule;

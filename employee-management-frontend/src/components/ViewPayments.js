// src/components/ViewPayments.js
import React from 'react';
import './ViewPayments.css';

const ViewPayments = () => {
    const payments = [
        { month: "January", amount: 4000 },
        { month: "February", amount: 4000 },
        // Add more payments as needed
    ];

    return (
        <div className="view-payments">
            <h2>Your Payment History</h2>
            <table className="payments-table">
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => (
                        <tr key={index}>
                            <td>{payment.month}</td>
                            <td>${payment.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewPayments;

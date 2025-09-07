import React from 'react';
import { Link } from 'react-router';

const PaymentSuccess = () => {
    return (
        <div>
            <h1>payment success<Link to='/dashboard'>dashboard</Link></h1>
        </div>
    );
};

export default PaymentSuccess;
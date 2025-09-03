import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = useAuthContext()
    console.log(user)
    // loading state so, user check 
    if(!user){
        return <p>loading</p>
    }
    return (
        user ? children :<Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;
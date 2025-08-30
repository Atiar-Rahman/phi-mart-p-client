import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home/Home'
const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home></Home>}></Route>
        </Routes>
    );
};

export default AppRoutes;
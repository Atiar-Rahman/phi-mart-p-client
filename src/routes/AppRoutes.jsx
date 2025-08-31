
import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home'

const AppRoutes = () => {
    return (
        <Routes>
          <Route element={<MainLayout></MainLayout>}>
            <Route path='/' element={<Home></Home>}></Route>
          </Route>
        </Routes>
    );
};

export default AppRoutes;
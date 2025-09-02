
import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home'
import Shop from '../pages/Shop';

const AppRoutes = () => {
    return (
        <Routes>
          <Route element={<MainLayout></MainLayout>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='shop' element={<Shop></Shop>}></Route>
          </Route>
        </Routes>
    );
};

export default AppRoutes;

import { Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home'
import Shop from '../pages/Shop';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from '../components/PrivateRoute';
import ActivateAccount from '../components/Registration/ActivateAccount';
import DashboardLayout from '../layouts/DashboardLayout';
import Profile from '../pages/Profile';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Order from '../pages/Orders';
import PaymentSuccess from '../pages/PaymentSuccess';
import AddProduct from '../pages/AddProduct';

const AppRoutes = () => {
    return (
      <Routes>
        {/* public routes */}
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="shop" element={<Shop></Shop>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route
            path="activate/:uid/:token"
            element={<ActivateAccount></ActivateAccount>}
          ></Route>
          <Route
            path="shop/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
        </Route>
        {/* private routes */}
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path="orders" element={<Order></Order>}></Route>
          <Route
            path="payment/success/"
            element={<PaymentSuccess></PaymentSuccess>}
          ></Route>
          <Route path="products/add" element={<AddProduct />} />
        </Route>
      </Routes>
    );
};

export default AppRoutes;
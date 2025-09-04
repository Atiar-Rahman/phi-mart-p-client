import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { BrowserRouter } from 'react-router'
import AppRoutes from './routes/AppRoutes.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <AppRoutes></AppRoutes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);

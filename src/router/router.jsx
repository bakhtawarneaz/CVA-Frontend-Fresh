import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/unAuthorized/login/Login';
import Home from '../pages/authorized/home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/auth/login" />,
    },
    {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'home',
                element: <Home />,
            },
        ],
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
        ],
    },
]);

export default router;
import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/unAuthorized/login/Login';
import Organizations from '../pages/authorized/organizations/Organizations';
import Brands from '../pages/authorized/brands/Brands';
import User from '../pages/authorized/user/User'
import CreateOrganizations from '../pages/authorized/organizations/CreateOrganizations';

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
                path: 'organizations',
                element: <Organizations />,
            },
            {
                path: 'organizations/create',
                element: <CreateOrganizations />,
            },
            {
                path: 'brands',
                element: <Brands />
            },
            {
                path: 'user',
                element: <User />
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
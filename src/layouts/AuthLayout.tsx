import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useTypedSelector } from '../hooks/hooksType';

const AuthLayout = () => {

    const { token } = useTypedSelector((state) => state.auth);

    if (token) {
        return <Navigate to={'/dashboard/home'} replace />;
    }

    return (
        <>
            <Outlet />
        </>
    );
};

export default AuthLayout;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useTypedSelector } from '../hooks/hooksType';
import Aside from '../views/aside/Aside';
import Header from '../views/header/Header';


const DashboardLayout = () => {

    const { token } = useTypedSelector((state) => state.auth);
    if (token === null) {
        return <Navigate to={'/auth/login'} replace />;
    }


    return (
        <>
            <Aside />
            <Header />
            <main className="main-app-wrap">
                <Outlet />
            </main>
        </>
    );
};

export default DashboardLayout;
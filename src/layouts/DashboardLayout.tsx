import React from 'react';
import { Navigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/hooksType';

const DashboardLayout = () => {

    const { token } = useTypedSelector((state) => state.auth);
    if (token === null) {
        return <Navigate to={'/auth/login'} replace />;
    }


    return (
        <>
            <div className='app-wrap'>
                <aside>
                <div className='app-brand'>
                    <a href="index.html" className="app-brand-link"></a>
                </div>
                <div className='side-menu'>
                    <ul>
                    <li>
                        <a href="#">organizations</a>
                    </li>
                    <li>
                        <a href="#">brands</a>
                    </li>
                    <li>
                        <a href="#">user</a>
                    </li>
                    </ul>
                </div>
                </aside>
            </div>
        </>
    );
};

export default DashboardLayout;
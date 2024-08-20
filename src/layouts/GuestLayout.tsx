import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const GuestLayout: React.FC = () => {
    const userAccessToken = localStorage.getItem('X-User-Access');

    if (userAccessToken) {
        return <Navigate to="/admin" />;
    }

    return (
        <div className="home-page">
            <Outlet />
        </div>
    );
};

export default GuestLayout;

import React, { useState, useEffect } from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { Spinner } from "@nextui-org/react";
import { useAuthStore } from "../data/store/AuthStore";

const DefaultLayout: React.FC = () => {
    const { fetchUser } = useAuthStore();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchUser()
            .then(user => {
                console.log(user);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                setLoading(false);
            });
    }, [fetchUser]);

    if (loading) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        );
    }

    if (error) {
        return <Navigate to="/" />;
    }

    return (
        <div className="home-page">
            <Outlet />
        </div>
    );
}

export default DefaultLayout;

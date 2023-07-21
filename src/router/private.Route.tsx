import { Navigate, Outlet } from "react-router-dom";
import React from 'react';

export const PrivateRoute = () => {
    const isLogged: string | null = localStorage.getItem("logged")

        if (!isLogged) {
            return <Navigate to="/" />
        }

        return (
            <Outlet />
        )
}
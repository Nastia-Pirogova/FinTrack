import {StrictMode, useState, useEffect} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {RouterProvider, createBrowserRouter, Navigate} from "react-router-dom";

import App from "./App";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/Profile";
import useAuth from "./hooks/useAuth"
import Loading from "./components/Loading";
import TransactionPage from "./pages/TransactionPage";

function ProtectedRoute({children}) {
    const {user, loading} = useAuth();

    if (loading) {
        return <Loading/>;
    }

    return user ? children : <Navigate to="/signin"/>;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/signin",
        element: <SignIn/>,
    },
    {
        path: "/signup",
        element: <SignUp/>,
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <Dashboard/>
            </ProtectedRoute>
        ),

    },
    {
        path: "/dashboard/transactions/:id",
        element: <TransactionPage />,
    },

    {
        path: "/contact",
        element: <Contact/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/profile",
        element: (
            <ProtectedRoute>
                <Profile/>
            </ProtectedRoute>
        ),
    },
]);


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)

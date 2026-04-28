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
import useAuth from "../src/hooks/useAuth"

function AuthenticatedUser() {
    const user = useAuth();

    if (!user) {
        return <Navigate to="/signin"/>;
    }

    return <Dashboard />;
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
        element:  <Dashboard />
        //element:<AuthenticatedUser />,
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
        //element: isAuthenticated ? <Profile/> : <Navigate to="/signin" replace/>,
    },
]);


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)

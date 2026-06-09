import {useState} from 'react'
import clsx from 'clsx'
import Logo from '../assets/svg/Logo.tsx'
import Burger from '../assets/svg/Burger.tsx'
import WeatherWidget from "./WeatherWidget.tsx";
import {Link} from "react-router-dom";
import HeaderUser from "../components/HeaderUser.tsx";
import useAuth from "../hooks/useAuth";

function Header({weather}) {
    const [open, setOpen] = useState(false);
    const { user, loading } = useAuth();
    const isAuthenticated = Boolean(user);
    return (

        <>
            <header id="header" className="header p-4  bg-white border-b border-b-gray-300">
                <div className="container md:mx-auto w-full flex justify-between gap-4 flex-wrap md:flex-nowrap">
                    <a className="header-logo flex min-w-max items-center" href="/">
                        <Logo/>
                    </a>
                    <nav
                        className={clsx(open ? "flex" : "hidden", " md:flex items-center bg-black/50 md:bg-transparent fixed md:static top-0 left-0 z-100 w-full md:w-fit max-h-screen h-full md:h-auto")}
                        onClick={() => setOpen(false)}
                    >
                        <ul className="header-menu flex gap-8 md:gap-4 flex-col md:flex-row md:items-center text-slate-600 bg-white w-[300px] md:w-fit h-full p-8 md:p-0 md:justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <li className="header-menu-item">
                                <Link to="/dashboard" className="">Dashboard</Link>
                            </li>
                            <li className="header-menu-item">
                                <Link to="/about" className="">About</Link>
                            </li>
                            <li className="header-menu-item">
                                <Link to="/contact" className="">Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    {!loading && !isAuthenticated && (
                        <div className="header-buttons flex gap-2 order-4 w-full md:w-auto md:order-2">
                            <Link
                                to="/signin"
                                className="py-4 px-4 font-medium header-menu-link inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white flex-1 md:flex-none md:px-6 text-slate-900 transition hover:bg-slate-50 shrink-0 space-nowrap"
                            >
                                Sign In
                            </Link>

                            <Link
                                to="/signup"
                                className="py-4 px-4 font-medium header-menu-link inline-flex items-center justify-center rounded-lg text-white bg-blue-600 flex-1 md:flex-none md:px-6 shrink-0 space-nowrap"
                            >
                                Sign up
                            </Link>
                        </div>
                    )}

                    <WeatherWidget weather={weather}/>
                    <HeaderUser/>

                    <button id="burger" className="header-burger md:hidden" onClick={() => setOpen(!open)}>
                        <Burger/>
                    </button>
                </div>
            </header>
        </>
    )
}


export default Header

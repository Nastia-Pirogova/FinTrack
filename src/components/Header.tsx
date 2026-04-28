import {useState} from 'react'
import clsx from 'clsx'
import appLogo from '../assets/logo.svg'
import WeatherWidget from "./WeatherWidget.tsx";
import { Link } from "react-router-dom";

function Header({weather}) {
    const [open, setOpen] = useState(false);
    return (

        <>
            <header id="header" className="header p-4  bg-white border-b border-b-gray-300">
                <div className="container mx-auto flex justify-between gap-4 flex-wrap md:flex-nowrap">
                    <a className="header-logo flex min-w-max" href="/">
                        <img src={appLogo} className="logo min-w-10" alt="Logo"/>
                    </a>
                    <nav
                        className={clsx(open ? "flex" : "hidden", " md:flex items-center bg-black/50 md:bg-transparent fixed md:static top-0 left-0 z-100 w-full max-h-screen h-full md:h-auto")}
                        onClick={() => setOpen(false)}
                    >
                        <ul className="header-menu flex gap-8 md:gap-4 flex-col md:flex-row md:items-center text-slate-600 bg-white w-[300px] md:w-full h-full p-8 md:p-0 md:justify-center"
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
                            <li className="header-menu-item">
                                <Link to="/profile" className="">My account</Link>
                            </li>
                        </ul>
                    </nav>

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

                    <WeatherWidget weather={weather}/>

                    <button id="burger" className="header-burger md:hidden" onClick={() => setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}


export default Header

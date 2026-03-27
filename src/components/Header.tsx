import {useState} from 'react'
import clsx from 'clsx'
import appLogo from '../assets/logo.svg'

function Header() {
    const [open, setOpen] = useState(false);
    return (

        <>
            <header id="header" className="header p-4  bg-white border-b border-b-gray-300">
                <div className="container mx-auto flex justify-between">
                    <a className="hero">
                        <img src={appLogo} className="logo" alt="Logo"/>
                    </a>
                    <nav
                        className={clsx(open ? "flex" : "hidden", " md:flex items-center bg-black/50 md:bg-transparent fixed md:static top-0 left-0 z-50 w-full max-h-screen h-full md:h-auto")}
                        onClick={() => setOpen(false)}
                    >
                        <ul className="header-menu flex gap-6 md:gap-2 flex-col md:flex-row md:items-center text-slate-600 bg-white w-[300px] md:w-full h-full p-8 md:p-0 md:justify-end "
                            onClick={(e) => e.stopPropagation()}
                        >
                            <li className="header-menu-item current">
                                <a href="#" className="p-2 font-medium header-menu-link">Overview</a>
                            </li>
                            <li className="header-menu-item">
                                <a href="#" className="p-2 font-medium header-menu-link">Transactions</a>
                            </li>
                            <li className="header-menu-item">
                                <a href="#"  className="p-2 font-medium header-menu-link">Analytics</a>
                            </li>
                            <li className="header-menu-item">
                                <a href="#" className="p-2 font-medium header-menu-link">Accounts</a>
                            </li>
                            <li className="header-menu-item">
                                <a href="#"  className="p-2 font-medium header-menu-link">Wallet</a>
                            </li>
                        </ul>
                    </nav>
                    <button id="burger" className="header-burger md:hidden" onClick={() => setOpen(!open)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}


export default Header

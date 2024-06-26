import { useState } from 'react'
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import { getLinks } from '../data';

export default function Header() {

    const [darkMode, setDarkMode] = useState(false);
    const [mobile, setMobile] = useState(false);

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode);
        document.body.classList.toggle("dark"); // update the dark value in tailwind config file
    }

    const links = getLinks();

    const standardStyle = "px-3 mx-1 py-3 text-gray-100 font-semibold rounded hover:bg-blue-500 dark:hover:bg-slate-600";
    const activeStyle = "px-2 mx-1 py-3 text-gray-100 font-bold rounded bg-blue-600 hover:bg-blue-500 dark:bg-slate-800 dark:hover:bg-slate-600"

    return (
        <header className="sticky top-0 z-50 bg-blue-400 dark:bg-slate-700 py-2">
            <div className="w-3/5 mx-auto flex flex-col md:flex-row items-center justify-between">
                <nav className="py-2">
                <NavLink 
                    to="/" 
                    className={({ isActive }) =>
                    isActive 
                        ? activeStyle 
                        : standardStyle
                    } 
                >
                    Home
                </NavLink>
                    <NavLink 
                        to="/blog"
                        className={({ isActive }) =>
                            isActive 
                                ? activeStyle 
                                : standardStyle
                        } 
                    >
                        Blog
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) =>
                            isActive 
                                ? activeStyle 
                                : standardStyle
                        } 
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/projects" 
                        className={({ isActive }) =>
                            isActive 
                                ? activeStyle 
                                : standardStyle
                        } 
                    >
                        Projects
                    </NavLink>
                </nav>
                <div className="py-2">
                    {links.map(link =>
                        <a className="p-2" key={link.name} href={link.link} target="_blank">
                            <button className="text-black text-xl md:text-3xl hover:transform hover:rotate-12 transition-transform duration-200"><FontAwesomeIcon icon={link.icon}/></button>
                        </a>
                    )}
                    <button 
                        className="p-2 text-xl md:text-3xl text-black hover:transform hover:rotate-12 transition-transform duration-200"
                        onClick={toggleDarkMode}    
                    >
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon}/>
                    </button>
                </div>
            </div>
        </header>
    )
}
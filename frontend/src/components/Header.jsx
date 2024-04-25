import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header() {

    const Links = [
        {link: 'https://www.github.com/Thomas-Osborne', icon: faGithub, key: 'GitHub'},
        {link: 'https://www.linkedin.com/in/tom-osborne-716619288/', icon: faLinkedin, key: 'LinkedIn'},
        {link: 'mailto: thomas.m.osborne.2@gmail.com', icon:faEnvelope, key: 'Email'}
    ];

    const standardStyle = "p-2 text-gray-100 font-semibold hover:font-bold hover:underline";
    const activeStyle = "p-2 text-gray-100 font-bold hover:underline"

    return (
        <header className="bg-blue-400 p-4 flex items-center justify-between">
            <nav>
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
            <div>
                {Links.map(link =>
                    <a className="p-2" key={link.key} href={link.link} target="_blank">
                        <button className="text-black hover:transform hover:rotate-12 transition-transform duration-200"><FontAwesomeIcon icon={link.icon} size="2x" /></button>
                    </a>
                )}
            </div>
        </header>
    )
}
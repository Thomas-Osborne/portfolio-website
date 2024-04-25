import { NavLink } from 'react-router-dom';

export default function Header() {

    const standardStyle = "p-2 text-gray-100 font-semibold hover:font-bold hover:underline";
    const activeStyle = "p-2 text-gray-100 font-bold underline"

    return (
        <header className="bg-blue-400 p-4 flex items-center justify-between">
            <NavLink 
                to="/" 
                className="text-gray-100 font-semibold hover:font-bold hover:underline"
            >
                Home
            </NavLink>
            <nav>
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
        </header>
    )
}
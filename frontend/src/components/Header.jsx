import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-orange-400 p-4 flex items-center justify-between">
            <Link to="/" className="text-gray-100">Home</Link>
            <nav>
                <NavLink to="/blog" className="p-2 text-gray-100">Blog</NavLink>
                <NavLink to="/about" className="p-2 text-gray-100">About</NavLink>
                <NavLink to="/projects" className="p-2 text-gray-100">Projects</NavLink>
            </nav>
        </header>
    )
}
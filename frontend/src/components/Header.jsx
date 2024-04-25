import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-gray-900 p-4 flex items-center justify-between">
            <h1 className="">Hi</h1>
            {/* <Link to="/">Home</Link>
            <nav>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </nav> */}
        </header>
    )
}
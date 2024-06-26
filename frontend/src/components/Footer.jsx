import { getLinks } from '../data';

const links = getLinks();

const linkElements = links.map(link => (
    <a className="px-2 hover:underline hover:text-gray-600 dark:hover:text-slate-300" href={link.link} key={link.name}>{link.name}</a>
))
export default function Footer() {
    return (
        <footer className="border-t-2 border-solid text-black border-gray-300 dark:bg-slate-600 dark:border-slate-500 dark:text-white">
            <div className="text-center item-center text-xs px-4 py-2">
                {linkElements}
            </div>
            <h5 className="text-center text-xs px-4 py-2">© Tom Osborne, 2024.</h5>
        </footer>
    )
}
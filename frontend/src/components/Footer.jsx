const Links = [
    {link: 'mailto: thomas.m.osborne.2@gmail.com', key: 'Email me!'},
    {link: 'https://www.linkedin.com/in/tom-osborne-716619288/', key: 'LinkedIn'},
    {link: 'https://www.github.com/Thomas-Osborne', key: 'GitHub'},
];

const linkElements = Links.map(link => (
    <a className="px-2 hover:underline" href={link.link}>{link.key}</a>
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
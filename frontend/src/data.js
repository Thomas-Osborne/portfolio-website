import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const links = [
    {
        link: 'mailto: thomas.m.osborne.2@gmail.com',
        name: 'Email me!',
        icon: faEnvelope,
    },
    {
        link: 'https://www.linkedin.com/in/tom-osborne-716619288/', 
        name: 'LinkedIn',
        icon: faLinkedin,
    },
    {
        link: 'https://www.github.com/Thomas-Osborne',
        name: 'GitHub',
        icon: faGithub
    },
];

const projects = [
    {
        name: "My First Project",
        id: 1,
        description: "Just testing this out.",
        year: 2024,
        text: "Blah blah blah. Lorem ipsum dolor.",
        github: "https://www.google.com",
        demo: "https://www.itv.com",
        background: "/assets/word-game.png",
    },
    {
        name: "Project Time",
        id: 2,
        description: "Some more basic text.",
        year: 2022,
        text: "This is a slightly different piece of text.",
        github: "https://www.example.com",
        demo: "https://www.reddit.com",
        background: "/assets/word-game.png",
    },
    {
        name: "#3 Project",
        id: 3,
        description: "Can we do it?!",
        year: 2023,
        text: "Wahoooo!",
        github: "https://www.bbc.com",
        demo: "https://www.hello.com",
        background: "/assets/word-game.png",
    }
]

function getLinks() {
    return links;
}

function getProjects() {
    return projects;
}

export { getLinks, getProjects }
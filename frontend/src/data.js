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
        content: "Words?! Words."
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
        content: "Yes yes yes"
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
        content: "Lorem ipsum dolor"
    }
]

const blogs = [
    {
        title: "The first blog",
        id: 1,
        author: "Tom Osborne",
        description: "My first blog post.",
        content: "This is an example blog post. I hope you like it!",
        createdAt: "2024-04-24T10:30:00Z",
        updatedAt: "2024-04-24T10:30:00Z"
    },
    {
        title: "What a great blog!",
        id: 2,
        author: "Tom Osborne",
        description: "What's inside? Who knows?",
        content: "It's not that interesting, I'm afraid.",
        createdAt: "2024-04-25T12:30:00Z",
        updatedAt: "2024-04-25T14:30:00Z"
    },
    {
        title: "Blog: The latest",
        id: 3,
        author: "Tom Osborne",
        description: "This should appear at the top!",
        content: "Yay!",
        createdAt: "2024-04-27T00:00:00Z",
        updatedAt: "2024-04-27T10:00:00Z"
    },
]

function getLinks() {
    return links;
}

function getProjects() {
    return projects;
}

function getBlogs() {
    return blogs;
}

export { getLinks, getProjects, getBlogs }
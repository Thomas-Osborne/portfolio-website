import { Link } from 'react-router-dom';

import ProjectSummary from './ProjectSummary';

export default function Projects() {

    const projects = [
        {
            name: "My First Project",
            id: 1,
            description: "Just testing this out.",
            year: 2024,
            text: "Blah blah blah. Lorem ipsum dolor.",
            github: "https://www.google.com",
            demo: "https://www.itv.com",
        },
        {
            name: "Project Time",
            id: 2,
            description: "Some more basic text.",
            year: 2022,
            text: "This is a slightly different piece of text.",
            github: "https://www.example.com",
            demo: "https://www.reddit.com",
        },
        {
            name: "#3 Project",
            id: 3,
            description: "Can we do it?!",
            year: 2023,
            text: "Wahoooo!",
            github: "https://www.bbc.com",
            demo: "https://www.hello.com",
        }
    ]

    const projectElements = (
        <div className="flex flex-wrap">
            {projects.map(project => (
                <div className="md:w-1/2 px-10 py-4">
                    <ProjectSummary key={project.id} project={project}/>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <h2>This is the project page.</h2>
            {projectElements}
        </>
    )
}
import { Link } from 'react-router-dom';

import ProjectSummary from './ProjectSummary';

export default function Projects() {

    const projects = [
        {
            name: "My First Project",
            id: 1,
            description: "Just testing this out.",
            year: 2024,
            text: "Blah blah blah. Lorem ipsum dolor."
        },
        {
            name: "Project Time",
            id: 2,
            description: "Some more basic text.",
            year: 2022,
            text: "This is a slightly different piece of text."
        },
        {
            name: "#3 Project",
            id: 3,
            description: "Can we do it?!",
            year: 2023,
            text: "Wahoooo!"
        }
    ]

    const projectElements = (
        <div className="flex flex-wrap">
            {projects.map(project => (
                <div className="md:w-1/2 px-20 py-4">
                    <Link key={project.id} to={project.id}>
                        <ProjectSummary project={project}/>
                    </Link>
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
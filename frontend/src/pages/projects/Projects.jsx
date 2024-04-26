import ProjectSummary from './ProjectSummary';
import { getProjects } from '../../data';

export default function Projects() {

    const projects = getProjects();

    const projectElements = (
        <div className="flex flex-wrap flex-col lg:flex-row">
            {projects.map(project => (
                <div key={project.id} className="xl:w-1/2 px-10 py-4">
                    <ProjectSummary key={project.id} project={project}/>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <h2 className="py-3 font-semibold text-4xl">Projects</h2>
            {projectElements}
        </>
    )
}
import { useParams } from 'react-router-dom';
import { getProjects } from '../../data';

import NotFound from '../../components/NotFound';

export default function BlogDetail() {

    const params = useParams();
    const id = parseInt(params?.id) || null;

    const projects = getProjects();

    const project = projects.find(project => project.id === id);

    return (
        project 
            ? 
                <div className= "h-full p-4">
                    <div className="pb-4">
                        <h3 className="text-xl text-center font-semibold">{project.name}</h3>
                        <h4 className="p-2 italic">{project.description}</h4>
                    </div>
                    <div className="mx-4 flex flex-row">
                        <span className="px-2"><a href={project.github} target="_blank">GitHub</a></span>
                        <span className="px-2"><a href={project.demo} target="_blank">Demo</a></span>
                    </div>
                    <div className="py-10">
                        {project.content}
                    </div>
                </div>
            : <NotFound />
    )
}
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectSummary(props) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    if (isHovered) {
        console.log(props.project.id);
    }
    
    return (
        <div className= "bg-gray-200 rounded-lg p-4 border border-black h-60" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered 
            ? (
                <div>
                    <h3 className="uppercase text-lg font-semibold">{props.project.name}</h3>
                    <div className="text-center">
                        <Link to={props.project.id}>
                            <span className="px-4">Details</span>
                        </Link>
                        <span className="px-4"><a href={props.project.github} target="_blank">GitHub</a></span>
                        <span className="px-4"><a href={props.project.demo} target="_blank">Demo</a></span>
                    </div>
                </div>
            ) : (
                <div>
                    <h3 className="uppercase text-lg font-semibold">{props.project.name}</h3>
                    <h4 className="italic">{props.project.description}</h4>
                    <span>{props.project.year} {props.project.id}</span>
                </div>
            )}
        </div>
    )
}

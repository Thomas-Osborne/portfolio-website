import { useState } from 'react';

export default function ProjectSummary(props) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className= "bg-gray-200 rounded-lg p-4 border border-black h-40" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered 
            ? (
                <div>
                    <h3 className="uppercase text-lg font-semibold">{props.project.name}</h3>
                    <div className="text-center">
                        <span className="px-4">Details</span>
                        <span className="px-4">GitHub</span>
                        <span className="px-4">Demo</span>
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

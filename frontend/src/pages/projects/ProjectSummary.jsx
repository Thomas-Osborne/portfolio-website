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
        <div className= "bg-gray-200 rounded-lg p-4 border border-black" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered 
            ? (
                <div>
                    <h3 className="uppercase text-lg font-semibold">{props.project.name}</h3>
                    <div>
                        <span>Details</span>
                        <span>GitHub</span>
                        <span>Demo</span>
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

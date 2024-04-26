import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function CourseInfo(props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleCollapse(event) {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

    return (
        <div className="flex flex-col rounded py-2 my-2 bg-gray-300 dark:bg-slate-500">
            <div className="flex py-2">
                <div className="w-full">
                    <div className="flex">
                        <div className="w-4/5 flex px-2 items-center text-left">
                            <FontAwesomeIcon icon={props.info.icon} className="px-2"/>
                            <h5 className="font-bold text-sm">{props.info.course}</h5>
                        </div>
                    <div className="w-1/5 flex items-center justify-center">
                        <button 
                            className="w-10 h-10 flex items-center justify-center"
                            onClick={toggleCollapse}   
                        >
                        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown}/>
                        </button>
                    </div>
                </div>
                    <div className="flex flex-col lg:flex-row justify-between px-2 items-center">
                        <div className="flex lg:text-left items-center">
                            <img src={props.info.logo} className="w-10 h-10 rounded-full" alt={props.info.university}/>
                            <h6 className="text-sm font-semibold px-1">{props.info.university}</h6>
                        </div>
                        <h6 className="lg:text-right italic text-sm px-1">{props.info.award}</h6>
                    </div>
                </div>
            </div>
            {isOpen && <div 
                className={`px-3 py-2 w-full`}
                style={{
                    height: isOpen ? 'auto' : '0',
                    overflow: 'hidden',
                    transition: 'height 0.3s ease',
                }}
            >
                <div className="py-2 text-left border-y border-y-black text-sm">
                    {props.info.description}
                </div>
                <div className="py-2 flex flex-col">
                    {props.info.grades.map(grade => (
                        <div className="flex justify-between items-center py-1" key={grade.name}>
                            <h6 className="text-sm font-semibold pr-1">{grade.name}</h6>
                            <h6 className="italic text-sm pl-1">{grade.score}</h6>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <h6 className="text-md font-bold pr-1">Overall</h6>
                    <h6 className="italic text-sm pl-1">
                        <span className="font-bold">{props.info.overall}</span> {props.info.ongoing && "(currently)"}
                    </h6>
                </div>
            </div>}
        </div>
    );
}

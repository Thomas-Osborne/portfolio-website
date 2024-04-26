import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react';

export default function CourseInfo(props) {

    const [icon, setIsIcon] = useState(faPlus)
    const [isOpen, setIsOpen] = useState(false);

    function toggleCollapse() {
        setIsOpen(prevIsOpen => !prevIsOpen);
        if (icon === faPlus) {
            setIsIcon(faMinus);
        } else if (icon === faMinus) {
            setIsIcon(faPlus);
        }
    }

    const gradeElements = props.info.grades.map(grade => (
        <div className="flex justify-between items-center">
            <h6 className="text-sm font-semibold pr-1">{grade.name}</h6>
            <h6 className="italic text-sm pl-1">{grade.score}</h6>
        </div>
    ));

    return (
        <div className="flex flex-col rounded py-2 my-2 bg-gray-300 dark:bg-slate-500">
            <div className="flex py-2">
                <div className="w-4/5">
                    <div className="flex px-2 items-center justify-center">
                        <FontAwesomeIcon icon={props.info.icon} className="px-2"/>
                        <h5 className="font-semibold text-md">{props.info.course}</h5>
                    </div>
                    <div className="flex justify-between px-2">
                        <h6 className="text-sm font-semibold px-1">{props.info.university}</h6>
                        <h6 className="italic text-sm px-1">{props.info.award}</h6>
                    </div>
                </div>
                <div className="w-1/5 flex items-center justify-center">
                    <button 
                        className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center"
                        onClick={toggleCollapse}   
                    >
                        <FontAwesomeIcon icon={icon}/>
                    </button>
                </div>
            </div>
            {isOpen && 
                <div className={`px-3 py-2 w-full`}>
                    <div className="py-2 text-left border-y border-y-black">
                        {props.info.description}
                    </div>
                    <div className="py-2 flex flex-col">
                        {gradeElements}
                    </div>
                    <div className="flex justify-between items-center">
                        <h6 className="text-md font-bold pr-1">Overall</h6>
                        <h6 className="italic text-sm pl-1">{props.info.overall} {props.info.ongoing && "(ongoing)"}</h6>
                    </div>
                </div>
                
            }
        </div>
    )
}
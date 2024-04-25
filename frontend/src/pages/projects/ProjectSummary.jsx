import { Link } from 'react-router-dom';

export default function Project(props) {
    return (
        <Link to={props.project.id} className="md:w-1/2 px-20 py-4">
            <div className= "bg-gray-200 rounded-lg p-4 border border-black">
                <h3 className="uppercase text-lg font-semibold">{props.project.name}</h3>
                <h4 className="italic">{props.project.description}</h4>
                <span className="text-ellipsis">{props.project.year}</span>
            </div>
        </Link>
    )
}

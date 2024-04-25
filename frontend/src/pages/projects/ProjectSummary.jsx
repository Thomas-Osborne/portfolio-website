export default function ProjectSummary(props) {
    return (
        <div className= "bg-gray-200 rounded-lg p-4 border border-black">
            <h3 className="uppercase text-lg font-semibold">{props.project.name}</h3>
            <h4 className="italic">{props.project.description}</h4>
            <span>{props.project.year}</span>
        </div>
    )
}

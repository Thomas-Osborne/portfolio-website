import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faComputer, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    const achievements = [
        {
            id: 1,
            university: "University of Warwick",
            course: "MMath Mathematics",
            award: "First Class Honours",
            icon: faCalculator,
        },
        {
            id: 2,
            university: "University of Bath",
            course: "MSc Computer Science",
            award: "projected Distinction",
            icon: faComputer,
        },
    ]

    console.log(achievements);

    const achievementsElements = achievements.map(achievement => (
        <div className="flex rounded py-2 my-2 bg-gray-300 dark:bg-slate-500">
            <div className="w-4/5">
                <div className="flex px-2 items-center justify-center">
                    <FontAwesomeIcon icon={achievement.icon} className="px-2"/>
                    <h5 className="font-semibold text-md">{achievement.course}</h5>
                </div>
                <div className="flex justify-between px-2">
                    <h6 className="text-sm font-semibold px-1">{achievement.university}</h6>
                    <h6 className="italic text-sm px-1">{achievement.award}</h6>
                </div>
            </div>
            <div className="w-1/5 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center">
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="p-10">
            <div className="container p-4 text-center rounded border bg-blue-400 border-blue-500 dark:bg-slate-600 dark:border-slate-800">
                <h3 className="pb-2 text-2xl font-semibold">Tom Osborne</h3>
                <div className="flex justify-center py-2 border-red-500 w-full h-full">
                    <img className="rounded-xl w-11/12 h-11/12 hover:w-full hover:h-full" src="../../public/assets/to105.png" />
                </div>
                <div>
                    {achievementsElements}
                </div>
            </div>
        </div>
    )
}

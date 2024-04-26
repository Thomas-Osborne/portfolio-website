import { faCalculator, faComputer } from '@fortawesome/free-solid-svg-icons'

import CourseInfo from './CourseInfo';

export default function Contact() {
    const achievements = [
        {
            id: 1,
            university: "University of Warwick",
            course: "MMath Mathematics",
            award: "First Class Honours",
            logo: "/assets/warwick.png",
            icon: faCalculator,
            description: "Graduated from the University of Warwick with a First Class Honours in Mathematics. Specialisms in algebra and number theory.",
            grades: [
                {
                    name: "1st Year",
                    score: "80%",
                },
                {
                    name: "2nd Year",
                    score: "84%",
                },
                {
                    name: "3rd Year",
                    score: "90%",
                },
                {
                    name: "4th Year",
                    score: "84%",
                }
            ],
            overall: "85%",
            ongoing: false,
        },
        {
            id: 2,
            university: "University of Bath",
            course: "MSc Computer Science",
            award: "projected Distinction",
            logo: "/assets/bath.png",
            icon: faComputer,
            description: "Undergoing a remote MSc in Computer Science from the University of Bath. Modules include Artificial Intelligence, Functional Programming and Human Computer Interaction.",
            grades: [
                {
                    name: "Principles of Programming",
                    score: "94%",
                },
                {
                    name: "Software Engineering I",
                    score: "70%",
                },
                {
                    name: "Foundations of Computation",
                    score: "99%",
                },
                {
                    name: "Software Engineering II",
                    score: "TBC",
                },
                {
                    name: "Database and Cloud",
                    score: "ongoing",
                }
            ],
            overall: "88%",
            ongoing: true,
        },
    ]

    const achievementsElements = achievements.map(achievement => (
        <CourseInfo info={achievement} key={achievement.id}/>
    ))

    return (
        <div className="p-10 border">
            <div className="p-4 text-center rounded border bg-blue-400 border-blue-500 dark:bg-slate-600 dark:border-slate-800">
                <h3 className="pb-2 text-2xl font-semibold">Tom Osborne</h3>
                <div className="flex justify-center py-2 w-full h-full">
                    <img className="rounded-xl w-2/3 h-2/3" src="../../assets/to105.png" />
                </div>
                <div>
                    {achievementsElements}
                </div>
            </div>
        </div>
    )
}

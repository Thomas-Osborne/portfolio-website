import { Link } from 'react-router-dom';

export default function BlogSummary(props) { 
    return (
        <div className= "h-auto p-4 border rounded-lg bg-gray-200 dark:bg-slate-500 dark:border-slate-700">
            <div className="text-center pb-4 font-serif">
                <h3 className="text-xl font-semibold">{props.blog.title}</h3>
                <h4 className="text-sm italic">{props.blog.description}</h4>
            </div>
            <div className="flex justify-center">
                <h6 className="px-2">{props.blog.author}</h6>
                <h6 className="px-2 ">{props.blog.createdAt}</h6>
            </div>

            <div className="flex justify-end">
                <Link to={props.blog.id}>
                    <button 
                        className="px-4 py-2 my-4 rounded-lg text-white font-semibold bg-blue-400 hover:bg-blue-500 dark:bg-slate-600 dark:hover:bg-slate-500"
                    >
                        Read more
                    </button>
                </Link>
            </div>

        </div>
    )
}

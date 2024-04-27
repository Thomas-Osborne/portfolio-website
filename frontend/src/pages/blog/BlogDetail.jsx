import { useParams } from 'react-router-dom';
import { getBlogs } from '../../data';

import NotFound from '../../components/NotFound';

export default function BlogDetail() {

    const params = useParams();
    const id = parseInt(params?.id) || null;

    const blogs = getBlogs();

    const blog = blogs.find(blog => blog.id === id);

    return (
        blog 
            ? 
                <div className= "h-full p-4">
                    <div className="pb-4">
                        <h3 className="text-xl text-center font-semibold">{blog.title}</h3>
                        <h4 className="p-2 italic">{blog.description}</h4>
                    </div>
                    <div className="mx-4 flex justify-between">
                        <h6 className="px-2">{blog.author}</h6>
                        <h6 className="px-2 ">{blog.createdAt}</h6>
                    </div>
                    <div className="py-10">
                        {blog.content}
                    </div>
                </div>
            : <NotFound />
    )
}
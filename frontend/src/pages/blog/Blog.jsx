import BlogSummary from './BlogSummary';

import { getBlogs } from '../../data';

export default function Blog() {

    const blogs = getBlogs();

    const blogElements = (
        <div className="flex flex-col">
            {blogs.map(blog => (
                <div key={blog.id} className="px-10 py-4">
                    <BlogSummary key={blog.id} blog={blog}/>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <h2 className="py-3 font-semibold text-4xl">Blog</h2>
            {blogElements}
        </>
    )
}
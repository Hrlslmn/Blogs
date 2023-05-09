import './BlogList.css'

const BlogList = ({title, blogs}) => {

    console.log(blogs)
    return ( 
        <div className="dispBlogContainer">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.Title}</h3>
                    <h4 style={{color:"brown"}}>{blog.body}</h4>
                    <p>Written By: {blog.Author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;
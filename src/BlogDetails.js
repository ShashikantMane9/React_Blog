import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const BlogDetails = () => {

    const {id} = useParams();
    const history = useHistory(); 
    const {data:blog,error,isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const [isDelete,setIsDelete] = useState(false);
    const handleDelete = () =>{
        setIsDelete(true);
         fetch('http://localhost:8000/blogs/'+id ,{
            method:'DELETE'
         }).then(()=>{
            setIsDelete(false);
            history.push('/');
         })
    }

    return ( 
        <div className="blog-details">
        
        {isPending && <div>Loading...</div>}
        {error && <div> { error}</div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <h4>Written By {blog.author}</h4>
                <div>{blog.body}</div>
                <div className="btndiv">
                {!isDelete && <button onClick={handleDelete}>Delete</button>}
                {isDelete && <button onClick={handleDelete}>Deleting Blog</button>}
                </div>
                
            </article> 
        )}
        </div>
     );
}
 
export default BlogDetails;
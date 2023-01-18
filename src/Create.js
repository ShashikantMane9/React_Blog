import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('PK');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();  

        setIsPending(true);
        const blog = {title,body,author};
        // console.log(blog);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
                setIsPending(false);
               alert('Blog added successfuly!!');
               console.log(blog); 
               history.push('/');  
        })
    }
    return (
        <div className="create">
            <h2>Add New blog</h2>
            <form onSubmit={handleSubmit}>
                <label >Blog Title : </label>
                <input 
                type="text"
                required placeholder="Enter title"
                onChange= {(e) => setTitle(e.target.value)}
                 />
                 <label >Blog Content : </label>
                    <textarea required
                     placeholder="Enter content here"
                     onChange= {(e) => setBody(e.target.value)}
                     ></textarea>
                <label >Blog Author : </label>
                <select value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                    >
                    <option value="SM">SM</option>
                    <option value="SP">SP</option>
                    <option value="AK">AK</option>
                    <option value="PK">PK</option>


                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog ...</button>}
            </form>
        </div>
    );
}
 
export default Create;
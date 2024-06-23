
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {


    const {data:blogs,isLoading,error} =useFetch('http://localhost:8000/blogs');
    // const [name,setName] = useState('Shashi');

    // const handleDelete = (id) =>{
    //     const newBlog = blogs.filter(blog => blog.id!== id)
    //     setBlog(newBlog)
    // }


    
    // const [name,setName] =  useState('SM');
    // // const [male,female] = useState('Shashikant1');
    // const handleClick = () =>{
    //     setName("Shashikant");
    // }
    // const chageGender = () =>{
    //     female('Shashikala');
    // }


    // const handleClickAgain = (name)sd, f =>{
    //     console.log('Hello '+name);
    // }
    return ( 
        <div className="home">
             {/* if error is not null then error div will visible */}
          {error && <div>{error}</div>}  

        {/* if loading is true then loading div will visible */}
          {isLoading && <div>Loading...</div>}  

        {/* if data is not null then blog component will visible */}  
          {blogs &&  <BlogList blogs={blogs} title="Blogs : "/>}
            {/* <p>{name}</p> */}
           {/* <BlogList blogs={blogs.filter((blog) => blog.auther === 'SM')} title="SM's Blogs : "/> */}
     
        </div>
            //       {/* <h2>Home Page</h2>
            // {/* <p>{name}</p> */}
            // {/* <button onClick={handleClick}>Click Me</button> */} */}
            // {/* <p>{male}</p>
            // <button onClick={chageGender}>Change Gender Only One Time</button> */}

            // {/* <button onClick={() => handleClickAgain('Shashikant') }>Click Me Again</button> */}
     );
}
 
export default Home;

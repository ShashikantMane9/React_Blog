import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>SM Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Create" style={{
                    color:"white",
                    backgroundColor : "rgb(52, 213, 138)",
                    borderRadius:"8px"
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

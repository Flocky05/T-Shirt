import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex justify-between bg-black p-4 ">
            <div className="text-white hover:text-orange-600">
                <Link className="text-2xl font-bold" to="/" >T-Shirt</Link>
            </div>
            <div className="grid  grid-cols-4 gap-20">
                <Link className="text-white hover:text-orange-600" to="/" >Home</Link>
                <Link className="text-white hover:text-orange-600" to="/about" >About</Link>
                <Link className="text-white hover:text-orange-600" to="/blog" >Blog</Link>
                <Link className="text-white hover:text-orange-600" to="/login" >Login</Link>
            </div>
        </div>
    );
};

export default Navbar;
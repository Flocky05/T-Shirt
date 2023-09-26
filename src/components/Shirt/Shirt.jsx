import { Link } from "react-router-dom";
import CartShirt from "../CardShirt/CartShirt";


const Shirt = ({tshirt,handleAddToCart}) => {
    const {picture,name,price}=tshirt;
    return (
        <div className="border-2 border-green-500 rounded-lg p-5 m-20 ">
            <img className="w-72 h-72 rounded-lg" src={picture} alt="" />
            <h2>ProductName: <span className="font-bold">{name}</span> </h2>
            <h3>Price:${price}</h3>
            <Link to="/cartShirt" onClick={()=> handleAddToCart(tshirt)} className="bg-green-500 text-white px-6 py-1 rounded" >Click</Link>
            
        </div>
    );
};

export default Shirt;
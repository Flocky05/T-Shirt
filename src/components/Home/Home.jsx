import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Context } from "../../context/ProductContext.jsx";
import CartShirt from "../CardShirt/CartShirt.jsx";
import Shirt from "../Shirt/Shirt.jsx";


const Home = () => {
    const {setProduct}=useContext(Context)
    const shirts=useLoaderData();
    const [cart,setCart]=useState([]);
    const handleAddToCart=shirts=>{
        setProduct(shirts)
    }
    return (
        <div>
           <div className="grid grid-cols-3">
            {
                shirts.map(shirt=><Shirt
                key={shirt._id}
                tshirt={shirt}
                handleAddToCart={handleAddToCart}
                ></Shirt>)
            }
           </div> 
        </div>
    );
};

export default Home;
import { useContext } from "react";
import { Context } from "../../context/ProductContext";


const CartShirt = () => {
 
 const {products}=useContext(Context)
    return (
        <div>
            <img src={products.picture} alt="" />
            <p>{products.gender}</p>
        </div>
    );
};

export default CartShirt;
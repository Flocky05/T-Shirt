import { createContext, useState } from "react";

export const Context= createContext({})

const ProductContext = ({children}) => {
    const [products,setProduct]=useState([]);
    console.log(products);
    return (
        <Context.Provider value={{products,setProduct}}>
            {children}
        </Context.Provider>
    );
};

export default ProductContext;
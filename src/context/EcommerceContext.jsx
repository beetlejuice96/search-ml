import { createContext, useEffect, useState } from "react";

export const EcommerceContext = createContext();

export const EcommerceProvider = ({children}) => {
    const [productsFetch, setProductsFetch] = useState([])
    const [products, setProducts] = useState([]);
    const [carrito, setCarrito] = useState([])


    const addItem = (name) => {
        setCarrito([...carrito, name])
    }

    async function fetchData(searchQuery) {
        const data = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`);
        const response = await data.json();
        setProductsFetch(response.results)
        setProducts(response.results);
      }

    return(
        <EcommerceContext.Provider value={{products,addItem,fetchData,setProducts,carrito,productsFetch}}>
            {children}
        </EcommerceContext.Provider>
    )
    
}


import {createContext, useEffect, useState} from "react";

const DataContext = createContext(null);

export const DataContextProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [isDisplayedModal, setIsDisplayedModal] = useState(false);
    const getProducts = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data)
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <DataContext.Provider
            value={{
                products,
                setProducts,
                isDisplayedModal,
                setIsDisplayedModal
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;

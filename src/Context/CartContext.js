import { useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const[cart, setCart] = useState ([]);

    const cleanCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    
    const removeProduct = (id) => setCart(cart.filter(product =>product.id !== id));



    return(
        <CartContext.Provider value={{
            cleanCart, 
            isInCart,
            removeProduct,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
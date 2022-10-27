import { useCartContext } from "../../Context/CartContext";

const CartWidget = () =>{
    const {totalProducts} = useCartContext();

    return(
        <>
        <i className="bi bi-cart2"></i>
        <span>{totalProducts() || ''}</span>
        </>
    )
}

export default CartWidget
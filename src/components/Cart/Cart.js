import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useCartContext } from '../../Context/CartContext';
import ItemCart from "../ItemCart/ItemCart";

const Cart = () =>{
    const {cart, totalPrice, totalProducts} = useCartContext();
    if(cart.length === 0){
        return(
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'></Link>
            </>
        );
    }
    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>Cantidad de productos: {totalProducts()}</p>
            <p>
                Total: {totalPrice()}
            </p>
            <div className="d-grid gap-2">
                <Link to='/checkout'> <Button variant="primary" size="lg" >Emitir Compra</Button></Link>
                    
            </div>
        </>
    )
}

export default Cart
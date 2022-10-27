import './ItemCart.css'
import { useCartContext } from '../../Context/CartContext';


const ItemCart = ({product}) => {
    const [removeProduct] = useCartContext();
    return(
        <div className="itemCart">
            <img src={product.image} alt={product.title}></img>
            <div>
                <p>Titulo:{product.title}</p>
                <p>Cantidad:{product.quantity}</p>
                <p>Precio $:{product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <i class="bi bi-x" onClick={() => removeProduct(product.id)}>Eliminar</i>
            </div>
        </div> 
    )
}

export default ItemCart
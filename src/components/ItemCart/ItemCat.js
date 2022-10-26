import DeleteIcon from '@mui/icons-material/Delete';
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
                <svg data-testid="DeleteIcon" onClick={() => removeProduct(product.id)} ></svg>
            </div>
        </div> 
    )
}

export default ItemCart
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);
    const [addProduct] = useCartContext();

    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(data,quantity);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="detail-image" src={data.image}></img>
                <div className="content">
                    <h2>{data.title}</h2>
                    <p>{data.price}</p>
                    {
                        goToCart
                        ? <Link to='/cart'>Terminar mi compra</Link>
                        :<ItemCount initial={1} stock={5} onAdd={onAdd}/>
                    }
                    </div>
            </div>
        </div>
    )
}

export default ItemDetail
import './ItemDetail.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.price}
                </Card.Text>
                <Button variant="primary">
                {
                    goToCart 
                    ? <Link to='/cart'>Terminar mi compra</Link>
                    :<ItemCount initial={1} stock={5} onAdd={onAdd}/>
                }
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail
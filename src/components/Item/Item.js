import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({info}) =>{
    
    return(
        <Card style={{ width: '18rem' }}>
            <Link to={`/Item/${info.id}`}></Link>
            <Card.Img variant="top" src={info.image} />
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <Card.Text>
                {info.price}
                </Card.Text>
                <ItemCount stock={info.stock}/>
            </Card.Body>
        </Card>
    )
}

export default Item

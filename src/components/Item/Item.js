import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({info}) =>{
    
    return(
        <>
            <Link to={`/item/${info.id}`}>
                <Card style={{ width: '18rem' }}>   
                        <Card.Img variant="top" src={info.image} />
                            <Card.Body>
                                <Card.Title>{info.title}</Card.Title>
                                <Card.Text>
                                {info.price}
                                </Card.Text>        
                            </Card.Body>
                </Card>
            </Link>
            <div>
                <ItemCount stock={info.stock}/>
            </div>
        </>    
    )
}

export default Item

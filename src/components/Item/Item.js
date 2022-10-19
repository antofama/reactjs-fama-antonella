import './Item.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Item = ({info}) =>{
    
    return(
        <div className="cards">
            <Link to={`/item/${info.id}`} className="products">
                <img className='image' src={info.image}> 
                </img>
                <p className='title'>{info.title}</p>
                <p className='price'>{info.price}</p>
            </Link>
        </div>
    )
}

export default Item

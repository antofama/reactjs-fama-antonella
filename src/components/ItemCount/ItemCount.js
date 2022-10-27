import Button from 'react-bootstrap/Button';
import {useState, useEffect} from "react";

const ItemCount = ({initial, stock, onAdd}) =>{
    const [count, setCount] = useState((initial));

    const mas = () =>{
        setCount(count + 1);
    }

    const menos = () =>{
        setCount(count - 1);
    }
    
    useEffect(()=>{
        setCount((initial));
    }, [initial])

    return(
        <div className='counter'>
            <Button variant="info" disabled={count <=1} onClick={menos}>-</Button>
            <span>{count}</span>
            <Button variant="info" disabled={count >=stock} onClick={mas}>+</Button>
            <hr></hr>
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" disabled={stock<=0} onClick={ () => onAdd(count)} >
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemCount
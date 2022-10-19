import "./itemCount.css";
import {useState, useEffect} from "react";

const ItemCount = ({initial, stock, onAdd}) =>{
    const [count, setCount] = useState(parseInt(initial));

    const mas = () =>{
        setCount(count + 1);
    }

    const menos = () =>{
        setCount(count - 1);
    }
    
    useEffect(()=>{
        setCount(parseInt((initial)));
    }, [initial])

    return(
        <div className='counter'>
            <button disabled={count <=1} onClick={menos}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={mas}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={()=> onAdd(count)}> Agregar al Carrito </button>
            </div>
        </div>
    )
}

export default ItemCount
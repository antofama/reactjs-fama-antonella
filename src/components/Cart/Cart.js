import { addDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext"
import ItemCart from "../ItemCart/ItemCart";
import { getFirestore } from 'firebase/firestore';

const Cart = () =>{
    const [cart, totalPrice] = useCartContext();

    const order = {
        comprador:{
            name: "Antonella Fama",
            email: "antoefama@gmail.com",
            phone: 1156745364,
            address: "Av.Mayo 223"
        },
        item: cart.map(productos => ({id: productos.id, title: productos.title, price: productos.price, quantity: productos.quantity})),
        total: totalPrice(),
    };

    const handleClick = () =>{
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then
    }

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
            <p>
                Total: {totalPrice()}
            </p>
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={handleClick}>
                    Emitir Compra
                </Button>
            </div>
        </>
    )
}

export default Cart
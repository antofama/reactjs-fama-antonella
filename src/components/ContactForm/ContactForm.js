import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';

const defaultForm = { name: "", email: "", message: "" };
const ContactForm = () => {
    const [form, setForm] = useState(defaultForm);
    const [id, setId] = useState('');
        const {cart,totalPrice,cleanCart} = useCartContext();

    const changeHandler =(ev) =>{
        setForm({...form, [ev.target.name] : ev.target.value})
    };

    const submitHandler = (ev) => {
        ev.preventDefault();
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc (ordersCollection, {
            form,
            items: cart,
            total: totalPrice(),
            date: serverTimestamp()
        }).then((snapshot)=> {
            setId(snapshot.id);
            cleanCart()
        })
    }


    return (
        <div>
            {id ? (
                <div>
                    Gracias por enviar el mensaje, se ha guardado con id {id}
                </div>
            ) : (
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name" className="letter">Nombre</label>
                    <input
                        name="name"
                        id="name"
                        value={form.name}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="letter">Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="message" className="letter">Ingrese su metodo de pago</label>
                    <textarea
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={changeHandler}
                    ></textarea>
                </div>
                <button><h4>Enviar</h4></button>
                <Link to="/"><button><h4>Volver al inicio</h4></button></Link>
            </form>
                
            )}
        </div>
    
    )};

export default ContactForm;
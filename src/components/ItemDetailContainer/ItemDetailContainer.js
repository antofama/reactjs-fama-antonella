import ItemDetail from "../ItemDetail/ItemDetail";
import {useState, useEffect} from 'react';


const product = {id:1, image:"https://www.lazarocuero.com.ar/media/catalog/product/m/o/mochila_puebla_panna_cuadrada_1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Mochila Puebla", price: "$19.800", category:"mochilas"};

const ItemDetailContainer = () => {
    const [data, setData] = useState ({});

    useEffect(() => {
        const getData = new Promise (resolve =>{
            setTimeout(()=> {
                resolve(product);
            }, 2000);
        });
        getData.then(res => setData(res));
    }, []);

    return(
        <ItemDetail data= {data}/>
    )
}

export default ItemDetailContainer
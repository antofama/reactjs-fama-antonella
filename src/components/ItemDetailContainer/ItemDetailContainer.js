import ItemDetail from "../ItemDetail/ItemDetail";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

const productos =[
    {id:1, image:"https://www.lazarocuero.com.ar/media/catalog/product/m/o/mochila_puebla_panna_cuadrada_1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Mochila Puebla", price: "$19.800", category:"mochilas"},
    {id:2, image:"https://www.lazarocuero.com.ar/media/catalog/product/m/o/mochila_bamboo_negro_4_1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Mochila Bamboo", price: "$18.500", category:"mochilas"},
    {id:3, image:"https://www.lazarocuero.com.ar/media/catalog/product/m/o/mochila_neon_naranja-1_1_1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Mochila Neon", price: "$17.900", category:"mochilas"},
    {id:4, image:"https://www.lazarocuero.com.ar/media/catalog/product/c/a/cartera_zelda_suela-1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Cartera Zelda", price:"$26.600", category:"carteras"},
    {id:5, image:"https://www.lazarocuero.com.ar/media/catalog/product/b/o/bolso_willow_gris-1_4qkjtzcwk3wfkymp.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Bolso Willow", price:"$17.900", category:"carteras"},
    {id:6, image:"https://www.lazarocuero.com.ar/media/catalog/product/m/i/minibag-mavis-rosa-2_fazsy1la3gqywmep.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Mini Bag Mavis", price:"$16.500", category:"carteras"},
    {id:7, image:"https://www.lazarocuero.com.ar/media/catalog/product/p/o/pocket-bag-fresno-violeta-1_1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Pocket Bag Fresno", price:"$12.300", category:"accesorios"},
    {id:8, image:"https://www.lazarocuero.com.ar/media/catalog/product/b/i/billetera_cambria_fucsia-1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Billetera Cambria", price:"$8.400", category:"accesorios"},
    {id:9, image:"https://www.lazarocuero.com.ar/media/catalog/product/m/a/maletin_pampa_2.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Maletin Pampa", price:"$33.000", category:"accesorios"},
];

const ItemDetailContainer = () => {
    const [data, setData] = useState ({});
    const {id} = useParams();


    useEffect(() => {
        const getData = new Promise (resolve =>{
            setTimeout(()=> {
                resolve(productos);
            }, 2000);
        });
        getData.then(res => setData(res.find(productos => productos.id === parseInt(id))));
    }, []);


    return(
        <ItemDetail data= {data}/>
    )
}

export default ItemDetailContainer
import Title from "../Title/Title";
import ItemList from "../ItemList/ItemList";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

const ItemListContainer = () =>{
    const [data, setData] = useState ([]);

    const {categoryId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');        
        if (categoryId){
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        }else{
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        }
    },[categoryId])


    return(
        <>
            <Title greeting='Disfruta de tu estilo'  />
            <ItemList data={data} />
        </>
    )
}

export default ItemListContainer

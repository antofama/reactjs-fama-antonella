import Title from "../Title/Title";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const productos =[
    {id:1, image:"https://www.lazarocuero.com.ar/media/catalog/product/m/o/mochila_puebla_panna_cuadrada_1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Mochila Puebla", price: "$19.800", category:"mochilas"},
    {id:2, image:"https://www.lazarocuero.com.ar/media/catalog/product/m/o/mochila_bamboo_negro_4_1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Mochila Bamboo", price: "$18.500", category:"mochilas"},
    {id:3, image:"https://www.lazarocuero.com.ar/media/catalog/product/m/o/mochila_neon_naranja-1_1_1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover", title:"Mochila Neon", price: "$17.900", category:"mochilas"},
    {id:4, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/830/962/products/rb621-b17be92e45ccda536516340028509784-640-0.jpg", title:"Nina Basic", price:"$18.100", category:"carteras"},
    {id:5, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/830/962/products/0j9a74331-b7e28435bfc9032d9216496065472595-640-0.jpg", title:"Agata", price:"$15.200", category:"carteras"},
    {id:6, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/830/962/products/rbmom209731-babcf517d0fbbe70cf16654967602519-640-0.jpg", title:"Acqua", price:"$12.500", category:"carteras"},
    {id:7, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/830/962/products/dsc_79891-5035aa87cbe50418b816327550216532-640-0.jpg", title:"Matera Boa", price:"$16.300", category:"accesorios"},
    {id:8, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/830/962/products/abfe8f07-13de-403c-aff4-646e7ce45ad8-474adc84dc013d26b316587873291545-640-0.jpeg", title:"Tarjetero Agata", price:"$6.400", category:"accesorios"},
    {id:9, image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/830/962/products/1afe5acc-d936-43b4-802b-36a7526d0ce3-a7bb71d6fefc362bf616587866148794-640-0.jpeg", title:"PortaCelular Mare", price:"$12.700", category:"accesorios"},
];

const ItemListContainer = () =>{


    const onAdd = (quantity) =>{
        console.log('compraste ${quantity} unidades');
    }


    return(
        <>
            <Title greeting='Disfruta de tu estilo'  />
            <ItemCount initial={1} stock={5} onAdd={onAdd}/>
            <ItemList />
        </>
    )
}

export default ItemListContainer

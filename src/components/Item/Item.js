import './Item.css';

const Item = ({info}) =>{
    return(
        <div className="cards">
            <a href="" className="products">
                <img className='image' src={info.image}> 
                </img>
                <p className='title'>{info.title}</p>
                <p className='price'>{info.price}</p>
            </a>
        </div>
    )
}

export default Item

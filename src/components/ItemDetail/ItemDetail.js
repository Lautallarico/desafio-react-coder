import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'


const ItemDetail = ({ data }) => {

    const { image, title, description, price, hand, stock } = data

    return (
        <div className="item-detail">
            <div>
                <img src={`/assets/${image}`} alt="imagen de producto" />
            </div>
            <div>
                <p>{title}</p>
                <p>{hand}</p>
                <p>{description}</p>
                <ItemCount stock={stock} initial={1} />
                <p>$ {price}</p>
                <button>Comprar</button>
            </div>

        </div>
    )
}

export default ItemDetail


/* 
<div className="item-detail">
            <img src={`/assets/${image}`} alt="imagen de producto" />
            <p>{title}</p>
            <p>{hand}</p>
            <p>{description}</p>
            <ItemCount stock={stock} initial={1} />
            <p>$ {price}</p>
            <button>Comprar</button>
</div> 
*/
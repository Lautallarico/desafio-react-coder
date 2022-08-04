import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'


const ItemDetail = ({ data }) => {

    const { image, title, description, price, hand, stock } = data
    const [quantitySelected, setQuantitySelected] = useState(0)


    return (
        <div className="item-detail">
            <div>
                <img src={`/assets/${image}`} alt="imagen de producto" />
            </div>
            <div>
                <p>{title}</p>
                <p>{hand}</p>
                <p>{description}</p>
                <p>Unidades disponibles {stock}</p>
                <p>$ {price}</p>
                {
                    quantitySelected > 0 ? <Link to='/cart'><button>TERMINAR COMPRA</button></Link> : <ItemCount stock={stock} setQuantitySelected={setQuantitySelected} />
                }


            </div>
        </div>
    )
}

export default ItemDetail


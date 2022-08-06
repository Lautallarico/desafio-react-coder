import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'


const ItemDetail = ({ data }) => {

    // const { } = useContext(CartContext)
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
                    quantitySelected > 0 ? <Link to='/cart'><button class="waves-effect waves-light btn-small">TERMINAR COMPRA</button></Link> : <ItemCount stock={stock} setQuantitySelected={setQuantitySelected} />
                }


            </div>
        </div>
    )
}

export default ItemDetail

/*



*/

/*
<div class="row">
            <div class="col s12 m7 l12">
                <div class="card large">
                    <div class="card-image">
                        <img src={`/assets/${image}`} />

                    </div>
                    <div class="card-content">
                        <span class="card-title">{title}</span>
                        <p>{description}</p>
                        <p>Unidades disponibles {stock}</p>
                        <p>$ {price}</p>
                    </div>
                    <div class="card-action">
                        {
                            quantitySelected > 0 ? <Link to='/cart'><button class="waves-effect waves-light btn-small">TERMINAR COMPRA</button></Link> : <ItemCount stock={stock} setQuantitySelected={setQuantitySelected} />
                        }
                    </div>
                </div>
            </div>
        </div>
*/
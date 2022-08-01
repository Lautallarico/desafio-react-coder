import ItemCount from "../ItemCount/ItemCount";
import './ItemProduct.css';
import { Link } from 'react-router-dom'

const ItemProduct = ({ data }) => {

    const { title, image, price, stock, id } = data

    return (
        <Link to={`/productos/${id}`}>
            <div className="item-product">

                <img src={`/assets/${image}`} alt="imagen de producto" />
                <p>{title}</p>
                <p>$ {price}</p>
                {/* <ItemCount stock={stock} initial={1} /> */}
                <button>Comprar</button>

            </div>
        </Link>
    )
}

export default ItemProduct
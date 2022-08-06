import ItemCount from "../ItemCount/ItemCount";
import './ItemProduct.css';
import { Link } from 'react-router-dom'

const ItemProduct = ({ data }) => {

    const { title, image, price, stock, id } = data

    return (
        <Link to={`/productos/${id}`}>
            <div>
                <div>
                    <div class="card">
                        <div class="card-image">
                            <img src={`/assets/${image}`} />
                        </div>
                        <div class="card-content">
                            <span class="card-title">{title}</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ItemProduct


import './ItemProduct.css';
import { Link } from 'react-router-dom'

const ItemProduct = ({ data }) => {

    const { title, image, price, stock, id } = data

    return (
        <Link to={`/productos/${id}`}>
            <div>
                <div>
                    <div className="card">
                        <div className="card-image">
                            <img src={`/assets/${image}`} />
                        </div>
                        <div className="card-content">
                            <span className="card-title">{title}</span>
                            <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ItemProduct


import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const cartContext = useContext(CartContext)
    const { cart, totalQuantity } = cartContext

    return (
        <>
            <Link to='/cart'>
                <a href="#!" className="collection-item cart-widget">
                    {
                        cart.length > 0 
                        ?
                        <span className="new badge" data-badge-caption="">{totalQuantity}</span>
                        : ''
                    }
                    <i className="Medium material-icons">add_shopping_cart</i>
                </a>
            </Link>
        </>
    )
}

export default CartWidget
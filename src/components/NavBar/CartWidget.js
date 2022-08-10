import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const CartWidget = () => {

    const cartContext = useContext(CartContext)
    const { cart } = cartContext

    return (
        <>
            <a href="#" className="cart-widget">
                <p className='qty'>{cart.length}</p>
                <i className="Medium material-icons">add_shopping_cart</i>
            </a>
        </>
    )
}

export default CartWidget
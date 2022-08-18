import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clear, buyAll, totalPrice, totalQuantity } = useContext(CartContext)
    console.log(cart);

    return (
        <>

            <h2 class="title-checkout">RESUMEN DE SU COMPRA</h2>
            {cart.length > 0 ?

                cart.map((product) => {
                    return (
                        <div className="row">
                            <div class="card-checkout col s8 offset-s2 ">
                                <div class="card-image col s3">
                                    <img className="col s11" src={`/assets/${product.image}`} alt='producto' />
                                </div>
                                <div class="card-description col s8">
                                    <div class="card-content col s2">
                                        <p>Producto:</p>
                                        <p>{product.title}</p>
                                    </div>
                                    <div class="card-content  col s2">
                                        <p>Categoría:</p>
                                        <p>{product.hand}</p>
                                    </div>
                                    <div class="card-content  col s2">
                                        <p>Cantidad:</p>
                                        <p>{product.quantitySelected}</p>
                                    </div>
                                    <div class="card-content  col s2">
                                        <p>Subtotal:</p>
                                        <p>$ {product.quantitySelected * product.price}</p>
                                    </div>
                                    <div class="card-content col s2">
                                        <a class="btn-floating btn-large waves-effect waves-light red" onClick={() => { removeItem(product.id) }}><i class="material-icons">remove_shopping_cart</i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) :

                <div className="vacio">
                    <h4>SU CARRITO ESTA VACIO</h4>
                    <img src="/assets/carrito-vacio.jpg"></img>
                    <Link to='/'><a class="waves-effect waves-light btn-large">Volver a comprar</a></Link>
                </div>

            }

            {
                cart.length > 0 &&

                <div className="row footer-compra">
                    <div className="col s9 offset-s2 ">
                        <div class='col s6'>El total de su compra es: $ {totalPrice}</div>
                        <div class='col s6'>Agregó al carrito {totalQuantity} items</div>
                    </div>
                    <div className="col s9 offset-s2 " id="resumen-btn">
                        <div className="col s6">
                            <a class="waves-effect waves-light btn" onClick={(() => { clear() })}><i class="material-icons right">delete</i>ELIMINAR TODO</a>
                        </div>
                        <div className="col s">
                            <a class="waves-effect waves-light btn" onClick={(() => { buyAll() })}><i class="material-icons right">monetization_on</i>TERMINAR COMPRA</a>
                        </div>
                    </div>
                </div>
            }


        </>
    )
}

export default Cart
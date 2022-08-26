import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import db from "../firebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import { async } from "@firebase/util"
import { Link } from "react-router-dom"
import './FinishBuy.css'

const FinishBuy = () => {
    const { cart, totalPrice, totalQuantity, clear } = useContext(CartContext)
    const [success, setSuccess] = useState()
    const [order, setOrder] = useState({
        items: cart.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        }),
        buyer: {},
        date: new Date().toLocaleString(),
        total: totalPrice
    })

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: ''
    })

    const handleChange = (e) => {
        console.log('valor de target ', e.target);
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitData = (e) => {
        e.preventDefault()
        console.log('orden para enviar', { ...order, buyer: formData });
        pushData({ ...order, buyer: formData })
    }

    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'orders')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log('Orden generada', orderDoc);
    }

    return (
        <>
            {success ? (
                <>
                    <div className="row resume">
                        <h3 class="col s12" id="titulo-finish">Se ha recibido su pedido</h3>
                        <p class="col s11 offset-s1">Su compra se registró bajo el ID {success}</p>
                        <p class="col s11 offset-s1">Ud realizó una compra de {totalQuantity} productos por un valor de ${totalPrice}</p>
                        <Link to='/' class="col s10 offset-s3 "><a class="waves-effect waves-light btn-large btn-finish" onClick={(() => { clear() })}>Hacer otra compra</a></Link>
                    </div>

                </>
            ) : (
                <>
                    <div class="row">
                        <h4 class="col s8 offset-s2">Te pedimos unos datos y terminamos la compra</h4>
                        <form class="col s8 offset-s2" onSubmit={submitData}>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="name" type="text" class="validate" name="name" placeholder="Nombre" onChange={handleChange}
                                        value={formData.name} />
                                </div>
                                <div class="input-field col s6">
                                    <input id="surname" type="text" class="validate" name="surname" placeholder="Apellido" onChange={handleChange}
                                        value={formData.surname} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="phone" type="number" class="validate" name="phone" placeholder="Teléfono" onChange={handleChange}
                                        value={formData.phone} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="email" type="email" class="validate" name='email' placeholder="E-mail" onChange={handleChange}
                                        value={formData.email} />
                                </div>
                            </div>
                            <button class="btn waves-effect waves-light" type="submit" name="action">Enviar
                                <i class="material-icons right">send</i>
                            </button>
                        </form>
                    </div>
                </>
            )}

        </>
    )
}


export default FinishBuy

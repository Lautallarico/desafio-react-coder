import { useState, useEffect, useContext } from "react"
import './ItemCount.css'
import { CartContext } from "../../Context/CartContext"


const ItemCount = ({ stock, setQuantitySelected, productData }) => {

    const { addItem } = useContext(CartContext)
    const [quantityToAdd, setQuantityToAdd] = useState(1)
    // const [contador, setContador] = useState(initial)

    const addProduct = () => {
        if (stock > quantityToAdd) {
            setQuantityToAdd(quantityToAdd + 1)
        }
    }

    const removeProduct = () => {
        if (quantityToAdd > 1) {
            setQuantityToAdd(quantityToAdd - 1)
        }
    }

    const onAdd = () => {
        // setQuantitySelected(quantityToAdd)
        addItem({...productData, quantityToAdd})
    }


    return (
        <>
            <div className="item-count">
                <a className="btn-floating red lighten-1" onClick={removeProduct}><i className="material-icons" >remove</i></a>
                {/* <button onClick={removeProduct}>-</button> */}
                <p>{quantityToAdd}</p>
                <a className="btn-floating red lighten-1" onClick={addProduct} ><i className="material-icons" >add</i></a>
                {/* <button onClick={addProduct}>+</button> */}
            </div>
            <button className="waves-effect waves-light btn-small" onClick={onAdd}>Agregar al carrito</button>
            {/* <button onClick={onAdd}>Agregar al carrito</button> */}
        </>
    )
}

export default ItemCount

    // <div div className = "item-count" >
    //             <button onClick={removeProduct}>-</button>
    //             <p>{quantityToAdd}</p>
    //             <button onClick={addProduct}>+</button>
    //         </div >
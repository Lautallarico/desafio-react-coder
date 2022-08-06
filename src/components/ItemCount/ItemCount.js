import { useState, useEffect } from "react"
import './ItemCount.css'


const ItemCount = ({ stock, setQuantitySelected }) => {

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
        setQuantitySelected(quantityToAdd)
    }


    return (
        <>
            <div className="item-count">
                <a class="btn-floating red lighten-1" onClick={removeProduct}><i class="material-icons" >remove</i></a>
                {/* <button onClick={removeProduct}>-</button> */}
                <p>{quantityToAdd}</p>
                <a class="btn-floating red lighten-1" onClick={addProduct} ><i class="material-icons" >add</i></a>
                {/* <button onClick={addProduct}>+</button> */}
            </div>
            <button class="waves-effect waves-light btn-small" onClick={onAdd}>Agregar al carrito</button>
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
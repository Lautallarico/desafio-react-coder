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
                <button onClick={removeProduct}>-</button>
                <p>{quantityToAdd}</p>
                <button onClick={addProduct}>+</button>
            </div>
            <button onClick={onAdd}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount
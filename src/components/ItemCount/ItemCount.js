import { useState, useEffect } from "react"
import './ItemCount.css'


const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial)
    
    const addProduct = () => {
        if (stock > contador) {
            setContador(contador + 1)
        }
    }

    const removeProduct = () => {
        if (contador >= 1) {
            setContador(contador - 1)
        }
    }


    return (
        <div className="item-count">
            <button onClick={removeProduct}>-</button>
            <p>{contador}</p>
            <button onClick={addProduct}>+</button>
        </div>
    )
}

export default ItemCount
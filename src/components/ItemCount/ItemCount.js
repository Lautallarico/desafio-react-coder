import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setContador] = useState(initial)

    const addProduct = () => {
        // setContador(contador + 1)
        if (stock > contador) {
            setContador(contador + 1)
        }
        
    }

    const removeProduct = () => {
       
        if (stock >= 1) {
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
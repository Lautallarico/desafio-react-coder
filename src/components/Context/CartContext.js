import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item, setQuantitySelected) => {
        setCart([...cart, item])
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id)
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
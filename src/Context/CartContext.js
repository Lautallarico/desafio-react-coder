import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (product) => {
        const isProductInCart = cart.find(productInCart => productInCart.id === product.id)

        if (isProductInCart) {
            const newArray = cart.map(productInCart => {
                if (productInCart.id === product.id) {
                    return { ...productInCart, quantityToAdd: productInCart.quantityToAdd + product.quantityToAdd }
                } else {
                    return productInCart
                }
            })
            setCart(newArray)
        } else {
            setCart([...cart, product])
        }
    }


    const clear = () => {
        setCart([])
        console.log('Carrito limpio clear');
    }

    const removeItem = (id) => {
        const newCart = cart.filter((product) => product.id !== id)
        setCart(newCart)
        console.log('log desde remove item')
    }

    const dataContext = {
        addItem,
        clear,
        removeItem,
        cart,
        setCart
    }

    return (
        <CartContext.Provider value={dataContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
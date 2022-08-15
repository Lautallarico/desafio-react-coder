import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    const addItem = (product) => {
        setTotalQuantity(totalQuantity + product.quantitySelected)
        setTotalPrice(totalPrice + product.quantitySelected * product.price)

        const isProductInCart = cart.find(productInCart => productInCart.id === product.id)

        if (isProductInCart) {
            const newArray = cart.map(productInCart => {
                if (productInCart.id === product.id) {
                    return { ...productInCart, quantitySelected: productInCart.quantitySelected + product.quantitySelected }
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
        setTotalPrice(0)
        setTotalQuantity(0)
    }

    const removeItem = (id) => {
        const prod = cart.find((product) => product.id === id)
        setTotalPrice(totalPrice - prod.quantitySelected * prod.price)
        setTotalQuantity(totalQuantity - prod.quantitySelected)

        const newCart = cart.filter((product) => product.id !== id)
        setCart(newCart)
    }

    const buyAll = () => {
        console.log(cart);
    }

    const dataContext = {
        addItem,
        clear,
        removeItem,
        cart,
        setCart,
        buyAll,
        totalPrice,
        totalQuantity
    }

    return (
        <CartContext.Provider value={dataContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
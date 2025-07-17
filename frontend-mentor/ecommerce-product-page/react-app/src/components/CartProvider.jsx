import { useState } from "react"
import CartContext from "../contexts/CartContext"

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const removeProduct = (productId) => {
        setCart(prev => prev.filter(p => p.id !== productId))
    }

    const addOrUpdateProduct = (product) => {
        const index = cart.findIndex(item => item.id === product.id)

        if (index !== -1) {
            setCart(prev =>
                prev.map((p, i) => (
                    i === index ? { ...p, qty: product.qty } : { ...p }
                ))
            )
        } else {
            setCart(prev => [
                ...prev, { ...product }
            ])
        }
    }

    console.log(cart)

    return (
        <CartContext.Provider value={{ cart, removeProduct, addOrUpdateProduct }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext }

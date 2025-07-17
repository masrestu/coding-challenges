import CartProvider from "./components/CartProvider"
import Navbar from "./components/Navbar"
import ProductPage from "./components/ProductPage"

function App() {

    return (
        <CartProvider>
            <Navbar />
            <ProductPage />
        </CartProvider>
    )
}

export default App

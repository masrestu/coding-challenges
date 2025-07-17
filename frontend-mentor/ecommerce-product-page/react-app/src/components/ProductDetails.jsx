import { useState } from "react"
import PrimaryButton from "./PrimaryButton"
import QuantityBox from "./QuantityBox"
import { useCart } from "../hooks/useCart"

export default function ProductDetails(props) {
    const { addOrUpdateProduct } = useCart()
    const [qty, setQty] = useState(0)
    const productInfo = props.product

    function handleAddOrUpdate() {
        const imageUrl = productInfo.images[0].replace(".jpg", "-thumbnail.jpg")
        addOrUpdateProduct({
            id: productInfo.id,
            name: productInfo.title,
            image: imageUrl,
            qty,
            price: productInfo.discountedPrice,
        })
    }

    function formatPrice(text) {
        return `$${text.toFixed(2)}`
    }

    function decreaseQty() {
        if (qty === 0) return false
        setQty(prevQty => prevQty - 1)
    }

    function increaseQty() {
        setQty(prevQty => prevQty + 1)
    }
    // PF1L9JH2

    return <>
        <div className="product-details">
            <section className="product-info">
                <div className="product-title-and-company">
                    <h2 className="product-company">
                        {productInfo.company}
                    </h2>
                    <h1 className="product-title">
                        {productInfo.title}
                    </h1>
                </div>
                <p>
                    {productInfo.desc}
                </p>
            </section>
            <section className="price">
                <div className="price-and-discount">
                    <h2 className="discounted-price">
                        {formatPrice(productInfo.discountedPrice)}
                    </h2>
                    <span className="discount-badge">
                        {productInfo.discountInPercent + "%"}
                    </span>
                </div>
                <h3 className="original-price">
                    {formatPrice(productInfo.originalPrice)}
                </h3>
            </section>
            <section className="qty-and-cta">
                <h2 className="sr-only">Select quantity</h2>
                <QuantityBox qty={qty} decreaseQty={decreaseQty} increaseQty={increaseQty} />
                <PrimaryButton isEnabled={Boolean(qty)} handleClick={handleAddOrUpdate} />
            </section>
        </div>
    </>
}
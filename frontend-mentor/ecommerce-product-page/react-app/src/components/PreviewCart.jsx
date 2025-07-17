import PrimaryButton from "./PrimaryButton"
import { useCart } from "../hooks/useCart"

export default function PreviewCart() {
    const { cart, removeProduct } = useCart()

    const formatNumber = (number) => {
        const abs = Math.abs(number);
        const formatted = new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(abs);

        return number < 0 ? `(${formatted})` : formatted;
    }

    const cartDisplay = cart.map(item => {
        const priceDisplay = `$${formatNumber(item.price)}`
        const totalPrice = item.price * item.qty
        const totalDisplay = `$${formatNumber(totalPrice)}`

        return <div key={item.id} className="cart-item">
            <img src={item.image} alt="" className="cart-item-image" />
            <div className="product-order-detail grid">
                <span className="cart-product-title">
                    {item.name}
                </span>
                <div className="cart-item-calc flex gap-2">
                    <span className="price-display">
                        {priceDisplay} x {item.qty}
                    </span>
                    <span className="total-display font-bold text-gray-950">
                        {totalDisplay}
                    </span>
                </div>
            </div>
            <button type="button" onClick={() => removeProduct(item.id)} aria-label={`Remove ${item.name} from cart`}>
                <img src="images/icon-delete.svg" alt="" />
            </button>
        </div>
    })

    return <div className="preview-cart">
        <h3 className="preview-header">
            Cart
        </h3>
        <div className="cart-list">
            {
                cart.length > 0 ?
                    <>
                        {cartDisplay}
                        <PrimaryButton>
                            Checkout
                        </PrimaryButton>
                    </>
                    :
                    <span className="empty-cart">
                        Your cart is empty.
                    </span>
            }
        </div>
    </div>
}
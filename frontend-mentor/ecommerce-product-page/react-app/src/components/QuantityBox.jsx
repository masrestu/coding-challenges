export default function QuantityBox(props) {
    return <div className="quantity-box">
        <button type="button" onClick={props.decreaseQty}>
            <img src="images/icon-minus.svg" alt="" />
        </button>
        <span>{props.qty}</span>
        <button type="button" onClick={props.increaseQty}>
            <img src="images/icon-plus.svg" alt="" />
        </button>
    </div>
}
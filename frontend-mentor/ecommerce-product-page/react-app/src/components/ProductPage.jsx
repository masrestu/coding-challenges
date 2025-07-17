import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";

export default function ProductPage() {
    const product = {
        id: 1,
        company: "Sneaker Company",
        title: "Fall Limited Edition Sneakers",
        desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durale runner outer sole, they'll withstand everything the weather can offer.",
        discountedPrice: 125,
        discountInPercent: 50,
        originalPrice: 250,
        images: [
            "images/image-product-1.jpg",
            "images/image-product-2.jpg",
            "images/image-product-3.jpg",
            "images/image-product-4.jpg",
        ]
    }

    return <>
        <ProductImages product={product} />
        <ProductDetails product={product} />
    </>
}
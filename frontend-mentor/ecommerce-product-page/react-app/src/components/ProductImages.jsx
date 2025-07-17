import { useState } from "react"
import ToggleProvider from "./ToggleProvider"
import ToggleButton from "./ToggleButton"
import ToggleOn from "./ToggleOn"
import ProductLightbox from "./ProductLightbox"
import ProductImageSwitch from "./ProductImageSwitch"

export default function ProductImages(props) {
    const productImageList = props.product.images

    const [currentImage, setCurrentImage] = useState(0)
    const totalImages = productImageList.length

    function prevImage() {
        if (currentImage === 0)
            setCurrentImage(totalImages - 1)
        else
            setCurrentImage(prevValue => prevValue - 1)
    }

    function nextImage() {
        if (currentImage === totalImages - 1)
            setCurrentImage(0)
        else
            setCurrentImage(prevValue => prevValue + 1)
    }

    const imageSelector = productImageList.map((image, index) => (
        <button
            type="button"
            key={image}
            aria-label={`Image preview ${index + 1}`}
            className={index === currentImage ? "selected" : null}
            onClick={() => setCurrentImage(index)}
        >
            <img src={image.replace(".jpg", "-thumbnail.jpg")} alt="" />
        </button>
    ))

    return <div className="product-carousel">
        <div className="main-image-control relative">
            <ToggleProvider>
                <ToggleButton>
                    <img src={productImageList[currentImage]} alt="" />
                </ToggleButton>
                <ToggleOn>
                    <ProductLightbox {...{
                        productImageList, currentImage, imageSelector, prevImage, nextImage
                    }} />
                </ToggleOn>
            </ToggleProvider>
            <ProductImageSwitch
                handlePrevButton={prevImage}
                handleNextButton={nextImage}
            />
        </div>
        <div className="main-image-thumbnails">
            {imageSelector}
        </div>
    </div>
}
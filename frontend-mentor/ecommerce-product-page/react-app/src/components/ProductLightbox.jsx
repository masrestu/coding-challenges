import { useToggle } from "../hooks/useToggle"
import ProductImageSwitch from "./ProductImageSwitch"

export default function ProductLightbox({ productImageList, currentImage, imageSelector, prevImage, nextImage }) {
    const { handleClose } = useToggle()
    return <div className="lightbox fixed flex flex-col items-center max-w-140 mx-auto left-1/2 top-1/2 -translate-1/2 gap-6 z-50 group">
        <button type="button" aria-label="Close Lightbox" className="overlay-close self-end" onClick={handleClose}>
            <svg viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="inherit" fillRule="evenodd" />
            </svg>
        </button>
        <div className="main-image-control relative">
            <img
                src={productImageList[currentImage]}
                alt=""
            />
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
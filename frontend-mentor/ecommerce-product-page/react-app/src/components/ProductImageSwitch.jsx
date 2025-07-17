export default function ProductImageSwitch({ handlePrevButton, handleNextButton }) {
    return <div className="image-control-wrapper">
        <button type="button" aria-label="Show previous preview" className="slider-control-btn" onClick={handlePrevButton}>
            <svg viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="current" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
        </button>
        <button type="button" aria-label="Show next preview" className="slider-control-btn" onClick={handleNextButton}>
            <svg viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="current" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
        </button>
    </div>
}
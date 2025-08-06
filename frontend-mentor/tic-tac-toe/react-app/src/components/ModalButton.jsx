export default function ModalButton({ onClick, children, type }) {
    let buttonColor
    if(type === "secondary") {
        buttonColor = "bg-neutral-100 hover:bg-neutral-50 inset-shadow-neutral-200"
    } else if (type === "primary") {
        buttonColor = "bg-secondary-400 hover:bg-secondary-300 inset-shadow-secondary-500"
    }
    return <button type="button" className={`px-4 pt-3.5 pb-4.5 ${buttonColor} inset-shadow-xs rounded-10 w-fit uppercase text-xs transition`} onClick={onClick}>{children}</button>
}
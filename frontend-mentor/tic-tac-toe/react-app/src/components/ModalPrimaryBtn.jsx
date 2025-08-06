export default function ModalPrimaryButton({ onClick, children }) {
    return <button type="button" className="px-4 pt-3.5 pb-4.5 bg-secondary-400 hover:bg-secondary-300 inset-shadow-xs inset-shadow-secondary-500 rounded-10 w-fit uppercase text-xs" onClick={onClick}>{children}</button>
}
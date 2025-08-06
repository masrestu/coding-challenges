export default function ModalSecondaryButton({ onClick, children }) {
    return <button type="button" className="px-4 pt-3.5 pb-4.5 bg-neutral-100 hover:bg-neutral-50 inset-shadow-xs inset-shadow-neutral-200 rounded-10 w-fit uppercase text-xs" onClick={onClick}>{children}</button>
}
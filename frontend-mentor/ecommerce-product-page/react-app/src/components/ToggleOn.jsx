import { useToggle } from "../hooks/useToggle"

export default function ToggleOn({ children }) {
    const { show, handleClose } = useToggle()
    return show ? <>
        <div className="overlay" onClick={handleClose}>
        </div>
        {children}
    </>
        : null
}
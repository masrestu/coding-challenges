import { useToggle } from "../hooks/useToggle"

export default function ToggleButton({ children }) {
    const { handleOpen } = useToggle()
    return <button type="button" aria-label="Open detail" onClick={handleOpen}>
        {children}
    </button>
}
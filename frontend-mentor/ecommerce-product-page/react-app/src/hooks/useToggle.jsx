import { useContext } from "react"
import ToggleContext from "../contexts/ToggleContext"

export function useToggle() {
    const context = useContext(ToggleContext)
    if (!context) {
        throw new Error("useToggle must be used within a ToggleProvider")
    }
    return context
}

import { useState } from "react"
import ToggleContext from "../contexts/ToggleContext"

export default function ToggleProvider({ children }) {
    const [show, setShow] = useState(false)

    const handleOpen = () => {
        setShow(prev => !prev)
    }

    const handleClose = (e) => {
        e.stopPropagation()
        const isOverlay = e.target.className === "overlay"
        const isCloseButton = e.currentTarget.classList.contains("overlay-close")
        if (isOverlay || isCloseButton)
            setShow(false)
    }

    return (
        <ToggleContext.Provider value={{ show, handleOpen, handleClose }}>
            {children}
        </ToggleContext.Provider>
    )
}

export { ToggleContext }

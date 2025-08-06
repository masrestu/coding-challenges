import { memo, useContext, useState } from "react"
import GameContext from "../context/GameContext"

function Cell({ id, checkBoard }) {
    const { nextMark } = useContext(GameContext)
    const [currentMark, setCurrentMark] = useState('')

    const handleClick = () => {
        if (currentMark) return false
        setCurrentMark(nextMark)

        checkBoard(nextMark, id)
    }

    let strokeColor = nextMark === "o" ? "hover:stroke-secondary-400" : "hover:stroke-primary-400"
    strokeColor = currentMark ? "" : strokeColor

    let fillColor = currentMark === "o" ? "fill-secondary-400" : "fill-primary-400"
    fillColor = !currentMark ? "fill-transparent" : fillColor

    const isMarked = currentMark ? "is-marked" : ""

    return (
        <button type="button" onClick={handleClick} className={`cell size-full aspect-square bg-neutral-800 flex justify-center rounded-10 md:rounded-15 py-[25%] inset-shadow-md inset-shadow-neutral-950 group/cell has-[.win-o]:bg-secondary-400 has-[.win-x]:bg-primary-400 ${fillColor} ${strokeColor} hover:stroke-2 ${isMarked}`}>
            <input
                type="text"
                id={id}
                name="cells"
                className={`hidden peer`}
                value={currentMark}
                readOnly
            />
            {
                <>
                    <svg className={`md:size-16 size-10 peer-[.win]:fill-neutral-800`} viewBox="-1 -1 66 66" xmlns="http://www.w3.org/2000/svg">
                        {
                            currentMark === "x" || (!currentMark && nextMark === "x") ?
                                <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="inherit" stroke="inherit" fillRule="evenodd" />
                                :
                                <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="inherit" stroke="inherit" />
                        }
                    </svg>
                </>
            }
        </button>
    )
}

export default memo(Cell)
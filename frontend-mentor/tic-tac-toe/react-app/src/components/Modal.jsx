/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import GameContext from "../context/GameContext"
import { FocusTrap } from "focus-trap-react"
import ModalButton from "./ModalButton"

export default function Modal({ onReset, onNextGame, playerOne, vsMode }) {
    const { round, modalCode, setModalCode, setRound, setNextMark, setScore } = useContext(GameContext)
    const isWin = (modalCode === "o" || modalCode === "x")

    useEffect(() => {
        if (modalCode === playerOne) {
            setScore(prev => [...prev].map((v, i) => i === 0 ? v + 1 : v))
        } else if (modalCode === "tied") {
            setScore(prev => [...prev].map((v, i) => i === 1 ? v + 1 : v))
        } else if (isWin) {
            setScore(prev => [...prev].map((v, i) => i === 2 ? v + 1 : v))
        }
    }, [round, modalCode])

    let caption

    if (isWin) {
        if (vsMode === "cpu") {
            caption = modalCode === playerOne ? "You won!" : "Oh no, You lost ..."
        } else {
            caption = `Player ${modalCode === playerOne ? "1" : "2"} wins!`
        }
    } else {
        if (modalCode === "tied") {
            caption = "Round tied"
        } else {
            caption = "restart game?"
        }
    }

    const resetBoard = () => {
        setModalCode(null)
        setNextMark("x")
    }

    const handleQuit = () => {
        setScore([0, 0, 0])
        resetBoard()
        setRound(1)
        onReset()
    }

    const handleNextGame = () => {
        resetBoard()
        setRound(prev => prev + 1)
        onNextGame()
    }

    const handleCancel = () => {
        setModalCode(null)
    }

    const isRestart = modalCode === "restart"
    const buttons = {
        secondary: {
            label: isRestart ? "No, cancel" : "Quit",
            handler: isRestart ? handleCancel : handleQuit
        },
        primary: {
            label: isRestart ? "Yes, restart" : "Next round",
            handler: isRestart ? handleQuit : handleNextGame
        },
    }

    const fillColor = modalCode === "o" ? "fill-secondary-400" : "fill-primary-400"

    return modalCode ?
        <aside role="dialog" className="fixed inset-0 bg-black/50 grid place-items-center">
            <FocusTrap>
                <div className={`modal bg-neutral-800 grid gap-y-4 w-full py-10 md:py-11.25 group/winner ${modalCode}-win`}>
                    {isWin && <h2 className="text-body md:text-xs text-center">{caption}</h2>}

                    <p className="group-[.x-win]/winner:text-primary-400 group-[.o-win]/winner:text-secondary-400 text-md md:text-lg flex items-center gap-2 md:gap-6 justify-center uppercase">
                        {
                            !isWin ?
                                <span>{caption}</span> :
                                <>
                                    <svg className={`size-7.5 md:size-16 ${fillColor} peer-[.win]:fill-neutral-800`} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                        {
                                            modalCode === "x" ?
                                                <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="inherit" fillRule="evenodd" />
                                                :
                                                <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="inherit" />
                                        }
                                    </svg>
                                    <span>Takes the round</span>
                                </>
                        }
                    </p>

                    <div className="buttons py-2 md:pb-0 text-neutral-950 flex gap-4 justify-center">
                        <ModalButton onClick={buttons.secondary.handler} type="secondary">
                            {buttons.secondary.label}
                        </ModalButton>
                        <ModalButton onClick={buttons.primary.handler} type="primary">
                            {buttons.primary.label}
                        </ModalButton>
                    </div>
                </div>
            </FocusTrap>
        </aside> :
        null
}
import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MarkPicker from "./components/MarkPicker"
import Board from "./components/Board"
import GameProvider from "./provider/GameProvider"
import Modal from "./components/Modal"
import { FocusTrap } from "focus-trap-react"
import CpuPlayer from "./components/CpuPlayer"

function App() {
    const [playing, setPlaying] = useState(false)
    const [p1Mark, setP1Mark] = useState("x")
    const [vsMode, setVsMode] = useState(null)

    const handleMarkChange = (event) => {
        setP1Mark(event.target.value)
    }

    const handleNewGame = (event,) => {
        setPlaying(true)
        setVsMode(event?.target.dataset.value || vsMode)
    }

    const handleReload = () => {
        setPlaying(false)
        setP1Mark("x")
        setVsMode(null)
    }

    return (
        <GameProvider>
            <FocusTrap>
                <div className={`wrapper ${playing ? "playing" : null} group/wrapper`}>
                    <Header onClick={handleReload} vsMode={vsMode} p1Mark={p1Mark}/>
                    <main className="bg-neutral-800 group-[.playing]/wrapper:p-0 group-[.playing]/wrapper:bg-transparent p-6 rounded-2xl inset-shadow-md group-[.playing]/wrapper:inset-shadow-none inset-shadow-neutral-950 w-full grid gap-y-4.5 text-center uppercase md:pb-7.5">
                        {
                            playing ?
                                <Board /> :
                                <MarkPicker currentMark={p1Mark} onChange={handleMarkChange} />
                        }
                    </main>
                    <Footer onClick={handleNewGame} playing={playing} vsMode={vsMode} p1Mark={p1Mark} />
                    <Modal onReset={handleReload} onNextGame={handleNewGame} playerOne={p1Mark} vsMode={vsMode} />
                    {vsMode === "cpu" && <CpuPlayer vsMode={vsMode} p1Mark={p1Mark} />}
                </div>
            </FocusTrap>
        </GameProvider>
    )
}

export default App

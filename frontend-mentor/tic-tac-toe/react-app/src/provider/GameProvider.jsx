import { useState } from "react";
import GameContext from "../context/GameContext";

export default function GameProvider({ children }) {
    const [nextMark, setNextMark] = useState("x")
    const [modalCode, setModalCode] = useState(null)
    const [round, setRound] = useState(1)
    const [score, setScore] = useState([0, 0, 0])

    return (
        <GameContext.Provider
            value={{
                nextMark, setNextMark,
                modalCode, setModalCode,
                round, setRound,
                score, setScore,
            }}
        >
            {children}
        </GameContext.Provider>
    )
}
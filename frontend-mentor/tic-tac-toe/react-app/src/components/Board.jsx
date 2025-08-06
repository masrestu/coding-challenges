import { memo, useContext } from "react";
import Cell from "./Cell";
import GameContext from "../context/GameContext";

function Board() {
    const { setNextMark, setModalCode, round } = useContext(GameContext)

    const checkBoard = (currentMark, id) => {
        const cells = document.getElementsByName("cells")
        const allValues = [...cells].map(cell => cell.id === id ? currentMark : cell.value)
        const { isWin, winLine } = isPlayerWin(allValues)

        if (isWin) {
            for (let index = 0; index < winLine.length; index++) {
                const elemId = winLine[index];
                document.getElementById(`cell-${elemId}`).classList.add("win", `win-${currentMark}`)
            }
            setModalCode(currentMark)
        } else if (allValues.every(Boolean)) {
            setModalCode("tied")
        } else {
            if (currentMark === "o") {
                setNextMark("x")
            } else {
                setNextMark("o")
            }
        }
    }

    const isPlayerWin = (cells) => {
        const winConditions = [
            [0, 1, 2], [0, 4, 8], [0, 3, 6],
            [1, 4, 7], [2, 4, 6], [2, 5, 8],
            [3, 4, 5], [6, 7, 8],
        ]

        for (let index = 0; index < winConditions.length; index++) {
            const cellNo = winConditions[index];
            if (cells[cellNo[0]] !== "" && cells[cellNo[0]] === cells[cellNo[1]] && cells[cellNo[1]] === cells[cellNo[2]]) {
                return { isWin: true, winLine: cellNo }
            }
        }

        return { isWin: false, winLine: null }
    }

    return (
        <div className="board grid grid-cols-3 grid-rows-3 gap-5" aria-label={`Game ${round}`}>
            {
                new Array(9).fill().map((_, index) => (
                    <Cell key={`cell-${index}-${round}`} id={`cell-${index}`} checkBoard={checkBoard} />
                ))
            }
        </div>
    )
}

export default memo(Board)
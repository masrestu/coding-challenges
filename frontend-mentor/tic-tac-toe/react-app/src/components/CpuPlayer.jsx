/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef } from "react"
import GameContext from "../context/GameContext"

export default function CpuPlayer({ vsMode, p1Mark }) {
    const step = useRef(0)
    const { nextMark, round } = useContext(GameContext)

    const isCpuTurn = vsMode === "cpu" && nextMark !== p1Mark
    useEffect(() => {
        step.current = 0
    }, [round])

    // function delay(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }

    useEffect(() => {
        async function cpuAction() {
            step.current = step.current + 1
            // console.log(step.current)

            if (isCpuTurn) {
                const cells = [...document.getElementsByName("cells")]
                if (step.current <= 2 && cells[4].value === '') {
                    cells[4].click()
                } else {
                    let advisedCell
                    const indexToWin = getIndexToLine(p1Mark === "x" ? "o" : "x")
                    if (indexToWin !== null) {
                        advisedCell = cells[indexToWin]
                    } else {
                        const indexToBlock = getIndexToLine(p1Mark)
                        if (indexToBlock !== null)
                            advisedCell = cells[indexToBlock]
                    }

                    if (!advisedCell) {
                        advisedCell = getRandomBlankCell()
                    }

                    advisedCell.click()
                }
            }
        }

        cpuAction()
    }, [isCpuTurn, nextMark])

    const winConditions = [
        [0, 1, 2], [0, 4, 8], [0, 3, 6],
        [1, 4, 7], [2, 4, 6], [2, 5, 8],
        [3, 4, 5], [6, 7, 8],
    ]

    function getIndexToLine(mark) {
        const current = [...document.getElementsByName("cells")].map(element => element.value)
        const rival = mark === "x" ? "o" : "x"
        let indexToMakeLine = null
        const markPositions = [...current].reduce((pos, value, index) => {
            if (value !== mark) return [...pos]
            return [...pos, index]
        }, [])

        for (const condition of winConditions) {
            const missingMark = [...condition].filter(cond => !markPositions.includes(cond))
            if (missingMark.length === 1 && current[missingMark[0]] !== rival) return missingMark[0]
        }

        return indexToMakeLine
    }

    function getRandomBlankCell() {
        const elements = [...document.getElementsByName("cells")]
        const elementValues = elements.map(element => element.value)
        const blankCellIndex = elementValues.reduce((pos, value, index) => {
            if (value !== '') return [...pos]
            return [...pos, index]
        }, [])
        const randomIndex = Math.floor(Math.random() * (blankCellIndex.length + 1))
        // console.log("getRandomBlankCell", { elements, elementValues, blankCellIndex, randomIndex, "script": "Math.floor(Math.random() * (blankCellIndex.length + 1))" })

        return elements[blankCellIndex[randomIndex]]
    }

    return null
}
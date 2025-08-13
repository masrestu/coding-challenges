/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef } from "react"
import GameContext from "../context/GameContext"

export default function CpuPlayer({ vsMode, p1Mark }) {
    const step = useRef(0)
    const { nextMark, round } = useContext(GameContext)

    const isCpuTurn = vsMode === "cpu" && nextMark !== p1Mark
    useEffect(() => {
        step.current = isCpuTurn ? 1 : 0
    }, [round])

    // function delay(ms) {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }

    // console.log([isCpuTurn, nextMark])
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
                    const rivalMark = p1Mark === "x" ? "o" : "x"
                    let action

                    if (!advisedCell) {
                        const indexToWin = getIndexToLine(rivalMark)
                        advisedCell = indexToWin !== null ? cells[indexToWin] : advisedCell
                        // action = "winning"
                    }
                    
                    if (!advisedCell) {
                        const indexToBlock = getIndexToLine(p1Mark)
                        advisedCell = indexToBlock !== null ? cells[indexToBlock] : advisedCell
                        // action = "blocking"
                    }
                    
                    if (!advisedCell) {
                        const indexToTryToWin = getIndexToLine(rivalMark, true)
                        advisedCell = indexToTryToWin !== null ? cells[indexToTryToWin] : advisedCell
                        // action = "try to win"
                    }
                    
                    if (!advisedCell) {
                        advisedCell = getRandomBlankCell()
                        // action = "just random click"
                    }
                    console.log(action)

                    advisedCell.click()
                }
            }
        }

        cpuAction()
    }, [isCpuTurn, nextMark, round])

    const winConditions = [
        [0, 1, 2], [0, 4, 8], [0, 3, 6],
        [1, 4, 7], [2, 4, 6], [2, 5, 8],
        [3, 4, 5], [6, 7, 8],
    ]

    function getIndexToLine(mark, tryToWin = false) {
        // get current mark value on all cells
        const current = [...document.getElementsByName("cells")].map(element => element.value)
        
        const rival = mark === "x" ? "o" : "x"
        let indexToMakeLine = null
        
        // get the index of all cells with requested mark
        const markPositions = [...current].reduce((pos, value, index) => {
            if (value !== mark) return [...pos]
            return [...pos, index]
        }, [])

        const chances = []
        // check winConditions that only need one index to make a line and that index is empty 
        for (const condition of winConditions) {
            const missingMark = [...condition].filter(cond => !markPositions.includes(cond))
            if (tryToWin) {
                // console.log({missingMark, condition})
                if (missingMark.length === 2 && current[missingMark[0]] !== rival && current[missingMark[1]] !== rival) chances.push(missingMark)
            } else {
                if (missingMark.length === 1 && current[missingMark[0]] !== rival) return missingMark[0]
            }
        }

        if (tryToWin) {
            const chance = chances[Math.floor(Math.random() * chances.length)]
            return chance[Math.floor(Math.random() * 2)]
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
        const randomIndex = Math.floor(Math.random() * blankCellIndex.length)
        // console.log({blankCellIndex, randomIndex, blankIndex:blankCellIndex[randomIndex]})
        return elements[blankCellIndex[randomIndex]]
    }

    return null
}
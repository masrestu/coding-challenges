import { memo, useContext } from "react"
import GameContext from "../context/GameContext"

function Footer({ onClick, playing, vsMode, p1Mark }) {
    const {score} = useContext(GameContext)
    const label = vsMode === "cpu" ? ["You", "cpu"] : ["P1", "P2"]
    const labelOrder = p1Mark === "x" ? [...label] : [...label].reverse()
    const scoreOrder = p1Mark === "x" ? [...score] : [...score].reverse()

    return <footer className="space-y-4 md:space-y-5 text-neutral-900 w-full group-[.playing]/wrapper:grid group-[.playing]/wrapper:grid-cols-3 md:group-[.playing]/wrapper:space-y-0 group-[.playing]/wrapper:space-y-0 uppercase group-[.playing]/wrapper:gap-x-5">
        {
            playing ?
                <>
                    <div className="player-info">
                        <span className="label-info">x ({labelOrder[0]})</span>
                        <span className="score-info">{scoreOrder[0]}</span>
                    </div>
                    <div className="player-info">
                        <span className="label-info">ties</span>
                        <span className="score-info">{scoreOrder[1]}</span>
                    </div>
                    <div className="player-info">
                        <span className="label-info">o ({labelOrder[1]})</span>
                        <span className="score-info">{scoreOrder[2]}</span>
                    </div>
                </>
                :
                <>
                    <button type="button" onClick={onClick} className="btn-lg" data-value="cpu">new game (vs cpu)</button>
                    <button type="button" onClick={onClick} className="btn-lg" data-value="player">new game (vs player)</button>
                </>
        }
    </footer>
}

export default memo(Footer)
import { createContext, useRef, useState } from "react"

const QuizContext = createContext()

export default function QuizProvider({ children }) {
    const [globalQuizData, setGlobalQuizData] = useState(null)
    const [category, setCategory] = useState(null)
    const quizScore = useRef(0)

    const addQuizScore = () => {
        quizScore.current = quizScore.current + 1
    }

    const resetQuizScore = () => {
        quizScore.current = 0
    }

    return (
        <QuizContext.Provider value={{
            globalQuizData,
            setGlobalQuizData,
            category,
            setCategory,
            quizScore,
            addQuizScore,
            resetQuizScore,
        }}>
            {children}
        </QuizContext.Provider>
    )
}

export { QuizContext }
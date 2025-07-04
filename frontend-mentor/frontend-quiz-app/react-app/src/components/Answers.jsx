/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import getImgUrl from "../utils/images"
import { Link } from "react-router-dom"
import { QuizContext } from "../context/QuizContext"

export default function Answers(props) {
    const {addQuizScore} = useContext(QuizContext)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const correctAnswer = props.questionData.answer
    const isCorrect = correctAnswer === selectedAnswer
    useEffect(() => {
        if (isCorrect) addQuizScore()
    }, [props.questionIndex, isCorrect])

    const isChecked = isSubmitted && selectedAnswer

    const checkAnswer = () => {
        setSelectedAnswer(() => (document.querySelector("input[name='answers']:checked")?.value || null))
        setIsSubmitted(true)
    }

    const nextPage = () => {
        setSelectedAnswer(null)
        setIsSubmitted(false)
        props.nextPageEvent()
    }

    const answerChoices = props.questionData.options.map((choice, index) => {
        let answerClass = null
        let indicatorElement = null
        if (isChecked) {
            if (isCorrect && (choice === selectedAnswer)) {
                answerClass = 'correct'
                indicatorElement = <img src={getImgUrl(`/images/icon-correct.svg`)} alt="" className="ms-auto" />
            } else if (!isCorrect) {
                if (choice === selectedAnswer) {
                    answerClass = 'incorrect'
                    indicatorElement = <img src={getImgUrl(`/images/icon-error.svg`)} alt="" className="ms-auto" />
                } else if (choice === correctAnswer) {
                    answerClass = 'correct'
                    indicatorElement = <img src={getImgUrl(`/images/icon-correct.svg`)} alt="" className="ms-auto" />
                }
            }
        }

        return <label className={`option-item group ${answerClass}`} key={`${props.questionIndex}-${index}`}>
            <input type='radio' name='answers' value={choice} className='hidden peer' disabled={isChecked} />
            <div className={`option-icon-container option-answer`}>
                {String.fromCharCode(index + 65)}
            </div>
            <span className='option-text'>{choice}</span>
            {indicatorElement}
        </label>
    })

    const currentProgress = props.questionIndex + (isChecked ? 1 : 0)

    useEffect(() => {
        if (props.questionData) {
            document.documentElement.style.setProperty(
                '--progress-completed',
                `${(currentProgress * 100) / props.totalQuestions}%`
            )
        }
    }, [props.questionIndex, isSubmitted])

    const isLastPage = currentProgress === props.totalQuestions

    return (
        <>
            {answerChoices}

            {
                !isLastPage ?
                    <button type='button' onClick={isChecked ? nextPage : checkAnswer} className='btn-primary'>
                        {
                            isChecked ?
                                (props.totalQuestions - 1 === props.questionIndex ? 'Finish Quiz' : 'Next Question') :
                                'Submit Answer'
                        }
                    </button> :
                    <Link to='/score' className="btn-primary">View Score</Link>
            }

            {
                isSubmitted && !selectedAnswer ?
                    <div className="unanswered flex items-center justify-center text-red-500 gap-2 sm-text-preset-4-medium dark:text-white">
                        <img src={getImgUrl(`/images/icon-error.svg`)} alt="" />
                        <span>Please select an answer</span>
                    </div> :
                    null
            }
        </>
    )
}
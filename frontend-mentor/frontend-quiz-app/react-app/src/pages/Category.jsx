/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import Question from "../components/Question";
import Answers from "../components/Answers";

export default function Category() {
    const params = useParams()
    const { globalQuizData, setGlobalQuizData, setCategory } = useContext(QuizContext)
    const [questionData, setQuestionData] = useState(null)
    const questionIndexRef = useRef(0)
    const totalQuestions = useRef(0)
    const questionList = useRef(null)

    const setQuestionList = (data) => {
        questionList.current = [...data]
    }

    const updateQuestionInfo = () => {
        const questions = questionList.current
        totalQuestions.current = questions.length
        setQuestionData(questions[questionIndexRef.current])
    }

    const quizByCategory = useMemo(() => {
        return function (quiz) {
            return quiz.title === params.category
        }
    }, [params.category])

    const updateQuizStates = (data) => {
        const categoryDetail = data.find(quizByCategory)
        setQuestionList(categoryDetail.questions)
        setCategory({
            title: categoryDetail.title,
            icon: categoryDetail.icon,
            totalQuestions: categoryDetail.questions.length
        })

        updateQuestionInfo()
    }

    useEffect(() => {
        if (globalQuizData !== null) {
            updateQuizStates(globalQuizData)
        } else {
            async function fetchData() {
                await fetch('/data.json')
                    .then(response => response.json())
                    .then(data => {
                        const globalData = data.quizzes
                        setGlobalQuizData(() => globalData)
                        updateQuizStates(globalData)
                    })
            }
            fetchData()
        }
    }, [params.category])

    const goToNextPage = () => {
        questionIndexRef.current += 1
        updateQuestionInfo()
    }

    return questionData ? <>
        <div className='content-header'>
            <Question
                questionData={questionData}
                questionIndex={questionIndexRef.current}
                totalQuestions={totalQuestions.current}
            />
        </div>
        <div className='content-body'>
            <Answers
                questionData={questionData}
                questionIndex={questionIndexRef.current}
                totalQuestions={totalQuestions.current}
                nextPageEvent={goToNextPage}
            />
        </div>
    </> : null
}
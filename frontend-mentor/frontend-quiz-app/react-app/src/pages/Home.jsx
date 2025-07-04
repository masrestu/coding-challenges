/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import MainHeader from "../components/MainHeader";
import { QuizContext } from "../context/QuizContext";

export default function Home() {

    const { globalQuizData, setGlobalQuizData, resetQuizScore } = useContext(QuizContext)
    const getImgUrl = name => (new URL(`${name}`, import.meta.url).href)

    useEffect(() => {
        if (!globalQuizData) {
            async function fetchData() {
                await fetch('data.json')
                    .then(response => response.json())
                    .then(data => setGlobalQuizData(data.quizzes))
            }
            fetchData()
        }
        resetQuizScore()
    }, [])

    const categoryLinks = globalQuizData ? globalQuizData.map(quiz => (
        <Link to={quiz.title} className='option-item group' key={quiz.title}>
            <div className={`option-icon-container ${'color-scheme-' + quiz.title.toLowerCase()}`}>
                <img src={getImgUrl(quiz.icon)} alt='' className='size-2/3' />
            </div>
            <span className='option-text'>{quiz.title}</span>
        </Link>
    )) : null

    return (<>
        <div className='content-header'>
            <MainHeader />
        </div>
        <div className='content-body'>
            {categoryLinks}
        </div>
    </>
    )
}
import { QuizContext } from "../context/QuizContext"
import { Link, useNavigate } from "react-router-dom"
import CategoryLogo from "../components/CategoryLogo"
import { useContext, useEffect } from "react"

export default function Score() {
    const navigate = useNavigate()
    const { quizScore, category } = useContext(QuizContext)

    useEffect(() => {
        if (category === null) navigate('/')
    }, [category, navigate])

    return <>
        <div className='content-header'>
            <h1 className='title-container grid place-items-start gap-2'>
                <span className='sm-text-preset-2-light'>
                    Quiz completed
                </span>
                <span className='sm-text-preset-2-medium'>
                    You scored...
                </span>
            </h1>
        </div>
        <div className='content-body'>
            <div className="score-card grid p-8 gap-4 rounded-xl bg-white place-items-center text-center dark:bg-(--color-blue-850)">
                <CategoryLogo {...category} />
                <div className='score-detail grid gap-4'>
                    <h2 className='sm-text-preset-1-medium'>{quizScore.current}</h2>
                    <h3 className='sm-text-preset-4-medium text-gray-500 dark:text-blue-300'>out of {category.totalQuestions}</h3>
                </div>
            </div>
            {/* {categoryLinks} */}
            <Link to='/' className='btn-primary'>Play Again</Link>
        </div>
    </>
}
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

    return category ?
        <>
            <div className='content-header'>
                <h1 className='title-container grid place-items-start gap-2'>
                    <span className='title-1'>
                        Quiz completed
                    </span>
                    <span className='title-2'>
                        You scored...
                    </span>
                </h1>
            </div>
            <div className='content-body'>
                <div className="score-card">
                    <CategoryLogo {...category} />
                    <div className='score-detail'>
                        <h2 className='score-correct'>{quizScore.current}</h2>
                        <h3 className='score-total'>out of {category.totalQuestions}</h3>
                    </div>
                </div>
                {/* {categoryLinks} */}
                <Link to='/' className='btn-primary md:mt-4'>Play Again</Link>
            </div>
        </> :
        null
}
export default function Question(props) {
    return <>
        <span className='description'>
            Question {props.questionIndex + 1} of {props.totalQuestions}
        </span>
        <p className='question-text'>
            {props.questionData.question}
        </p>

        <div className='progress-bar'>
            <div className='progress-bar-completed' data-completed={`${(props.questionIndex * 100) / props.totalQuestions}%`}></div>
        </div>
    </>
}
import { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import CategoryLogo from './CategoryLogo'
import { useLocation } from 'react-router-dom'
import React from 'react'
import ThemeButton from './ThemeButton'

function Header() {
    const location = useLocation()
    const isRoot = location.pathname === '/'
    const { category } = useContext(QuizContext)

    return <header>
        {
            (isRoot || category === null) ?
                null :
                <CategoryLogo {...category} />
        }
        <ThemeButton />
    </header>
}

export default React.memo(Header)
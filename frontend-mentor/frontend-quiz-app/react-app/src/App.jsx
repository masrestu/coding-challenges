import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Category from './pages/Category'
import Score from './pages/Score'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/score' element={<Score />} />
                    <Route path='/:category' element={<Category />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

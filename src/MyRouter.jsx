import { Routes, Route, BrowserRouter } from 'react-router-dom'
import App from './App'
import Film from './Film'

const MyRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/film/:filmID' element={<Film />}/>
                <Route path='*' element={<h1>Error page not found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRouter
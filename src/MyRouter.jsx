import { Routes, Route } from 'react-router-dom'
import App from './App'
import Film from './Film'
import NavBar from './components/Navbar'

const MyRouter = () => {
    return (
            <>
                <NavBar />
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/film/:filmID' element={<Film />}/>
                    <Route path='*' element={<h1>Error page not found</h1>} />
                </Routes>
            </>
            
    )
}

export default MyRouter
import { Routes, Route } from 'react-router-dom'
import App from './App'
import Film from './pages/Film'
import NavBar from './components/Navbar'
import Inscription from './pages/Inscription'
import Login from './pages/Login'
import Posts from './pages/Posts'
import NewPost from './pages/NewPost'

const MyRouter = () => {
    return (
            <>
                <NavBar />
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/film/:filmID' element={<Film />}/>
                    <Route path='/register' element={<Inscription />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/posts' element={<Posts/>} />
                    <Route path='/newpost' element={<NewPost/>} />

                    <Route path='*' element={<h1>Error page not found</h1>} />
                </Routes>
            </>
            
    )
}

export default MyRouter
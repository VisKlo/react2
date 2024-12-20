import { Routes, Route } from 'react-router-dom'
import App from './App'
import Film from './pages/Film'
import NavBar from './components/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Posts from './pages/Posts'
import NewPost from './pages/NewPost'
import Profile from './pages/Profile'

const MyRouter = () => {
    return (
            <>
                <NavBar />
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/film/:filmID' element={<Film />}/>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/posts' element={<Posts/>} />
                    <Route path='/newpost' element={<NewPost/>} />
                    <Route path='/profile' element={<Profile />} />

                    <Route path='*' element={<h1>Error page not found</h1>} />
                </Routes>
            </>
            
    )
}

export default MyRouter
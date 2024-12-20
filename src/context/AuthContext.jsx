import axios from 'axios'
import { useContext } from 'react'
import {useState, useEffect, createContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { jwtDecode } from "jwt-decode"



export const AuthContext = createContext(null)

export const AuthController = ({children}) => {
    let navigate = useNavigate()
    const [authError, setAuthError] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)


    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            setIsAuthenticated(true)
        }
    }, [])


    const registerUser = async (user) => {
        try{    
         const response = await axios.post(`http://localhost:3002/register`, user)
         if(response.status === 201){
            alert(response.data.message)
            navigate('/login')
         }
        }
        catch(err){
            setAuthError(err.response.data.message)
            setTimeout(() => setAuthError(null), 3000)
        }
    }

    const loginUser = async (user) => {
        try{    
            const response = await axios.post(`http://localhost:3002/login`, user)
            if(response.status === 200) {
                localStorage.setItem('token', response.data.token)
                const decoded = jwtDecode(response.data.token);
                const userId = decoded.user;
                localStorage.setItem('userId', userId)
                alert('Login successfull')
                navigate('/')
                setIsAuthenticated(true)
            }
        }
        catch(err){
            setAuthError(err.response.data.message)
        }
    }


    return(
        <AuthContext.Provider  value={{registerUser, authError, loginUser, isAuthenticated}} >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
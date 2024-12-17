import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const MovieContext = createContext(null)

export const MovieController = ({children}) => {

    const [films, setFilms] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState("")
    const APP_KEY = import.meta.env.VITE_APP_KEY

    const fetchFilms = async () => {
        setLoading(true)
        try{
          const url = query ? `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${query}&language=fr` : `https://api.themoviedb.org/3/movie/now_playing?api_key=${APP_KEY}&language=fr`
          const response = await axios.get(url)
          setFilms(response.data.results)
        }
        catch(err){
          setError(err.message)
        }
        finally{
          setLoading(false)
        }
    }

    useEffect(() => {
        fetchFilms()
    }, [query])

    return(
        <MovieContext.Provider value={[films, error, loading, setQuery]}>
            {!loading && children}
        </MovieContext.Provider>
    )
}
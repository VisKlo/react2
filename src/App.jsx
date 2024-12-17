import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

const APP_KEY = import.meta.env.VITE_APP_KEY

function App() {

  const [films, setFilms] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")

  const fetchFilms = async () => {
    setLoading(true)
    try{
      const url = query ? `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&query=${query}&language=fr` : `https://api.themoviedb.org/3/movie/now_playing?api_key=${APP_KEY}&language=fr`
      const response = await axios.get(url)
      setFilms(response.data.results)
    }
    catch(err){
      console.log(err)
      setError(err.message)
    }
    finally{
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
  }

  useEffect(() => {
    fetchFilms()
  }, [query])

  return (
    <>
        <h1>Films App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 text-gray-700 transition duration-300' onChange={e => setSearch(e.target.value)} />
          <input type="submit" className='bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300' />
        </form>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        <div className='film-list'>
          {films && films.map((film) => (
            <div key={film.id} className="film-card">
              <p>{film.title}</p>
              <p>{film.vote_average}</p>
              <Link to={`/film/${film.id}`}><img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title}/></Link>
            </div>
          ))}
        </div>
    </>
  )
}

export default App
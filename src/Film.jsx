import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReactPlayer from 'react-player/youtube'

const APP_KEY = import.meta.env.VITE_APP_KEY
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_KEY

const Film = () => {
    let { filmID } = useParams()
    const [film, setFilm] = useState(null)
    const [loading, setLoading] = useState(true)
    const [trailer, setTrailer] = useState(null)

    const fetchFilm = async () => {
        setLoading(true)
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${filmID}?api_key=${APP_KEY}&language=fr`
            )
            setFilm(response.data)
            fetchTrailer(response.data.title)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const fetchTrailer = async (title) => {
        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&type=video&q=${title}+trailer`
            )
            setTrailer(response.data.items[0])
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchFilm()
    }, [])

    return (
        <>
            {loading && <p>Loading...</p>}
            {film && (
                <>
                    <h2>Description du film</h2>
                    <img
                        src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                        alt={film.title}
                    />
                    <h3>{film.title}</h3>
                    <p>Genre(s) :</p>
                    <ul>
                        {film.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <p>{film.overview}</p>
                    <p>Date de sortie : {film.release_date}</p>

                    <h3>Trailer :</h3>
                    {trailer ? (
                        <div key={trailer.id.videoId}>
                            <h4>{trailer.snippet.title}</h4>
                            <ReactPlayer url={`https://www.youtube.com/watch?v=${trailer.id.videoId}`} />
                        </div>
                    ) : (
                        <p>No trailer available.</p>
                    )}
                </>
            )}
        </>
    )
}

export default Film

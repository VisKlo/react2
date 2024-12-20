import { useState } from 'react';
import axios from 'axios';

const NewPost = () => {
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token')
            const response = await axios.post('http://localhost:3002/post', { title, author, content },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setMessage('Post crée avec succès')
        } catch (error) {
            setMessage(error.response.data.message || 'Une erreur est survenue')
        }
    }

    return (
        <div>
            <h1>Nouveau Post</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titre"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="auteur"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Contenu"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Creer le post</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default NewPost;
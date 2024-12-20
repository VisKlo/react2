import { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [message, setMessage] = useState('')
    const [posts, setPosts] = useState('')

    const getPosts = async (e) => {
        try {
            const token = localStorage.getItem('token')
            const response = await axios.get('http://localhost:3002/posts', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setPosts(response.data);
        } catch (error) {
            setMessage(error.response.data.message || 'Une erreur est survenue');
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {message && <p>{message}</p>}
            <ul>
                {posts.length > 0 ? (
                    posts.map(post => (
                        <li key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            <p><strong>Auteur:</strong> {post.author}</p>
                        </li>
                    ))
                ) : (
                    <p>Aucun post à afficher</p>
                )}
            </ul>
        </div>
    );
};

export default Posts;
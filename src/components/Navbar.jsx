import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav>
                <ul className='flex justify-evenly'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/register'><li>S'inscrire</li></Link>
                    <Link to='/login'><li>Se connecter</li></Link>
                    <Link to='/posts'><li>Voir les posts</li></Link>
                    <Link to='/newpost'><li>Creer un post</li></Link>
                </ul>
            </nav>
        </>
    )
}


export default NavBar
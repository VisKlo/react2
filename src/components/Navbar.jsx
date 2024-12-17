import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                </ul>
            </nav>
        </>
    )
}


export default NavBar
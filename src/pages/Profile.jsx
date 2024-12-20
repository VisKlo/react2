import { useEffect } from "react"
import { useProfile } from "../context/ProfileContext"


const Profile = () => {

    const {user ,getUser} = useProfile()

    useEffect(() => {
        const userId = localStorage.getItem('userId')
        if(userId){
            getUser()
        }
    }, [])


    return(
        <>
        <h1>Profil</h1>
        <ul>
            <li>Prénom : {user.name}</li>
            <li>Nom : {user.last_name}</li>
            <li>Email : {user.email}</li>
        </ul>
        </>
    )
}

export default Profile
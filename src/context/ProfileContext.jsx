import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const ProfileContext = createContext(null)

export const ProfileController = ({children}) => {

    const [user, setUser] = useState({
        name : '',
        last_name : '',
        email : ''
    })

    const getUser = async () => {
        try{
            const userId = localStorage.getItem('userId')
            const response = await axios.get(`http://localhost:3002/user/${userId}`)
            setUser({
                name : response.data.name,
                last_name : response.data.last_name,
                email : response.data.email,
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <ProfileContext.Provider  value={{user, getUser}} >
            {children}
        </ProfileContext.Provider>
    )

}

export const useProfile = () => useContext(ProfileContext)
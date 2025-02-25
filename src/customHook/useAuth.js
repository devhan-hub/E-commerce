import { useState , useEffect } from "react"

import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase.config"
const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth , user=> {
            setCurrentUser(user)
        })
        return unSubscribe;
    } , [])
  return currentUser
}

export default useAuth

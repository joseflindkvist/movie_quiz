import { getAuth } from "firebase/auth"
import { app } from "../firebaseConfig"
import NoUser from "../views/noUserView"
import { Routes, Route } from "react-router-dom"
function PrivateRoute({children}){
    const user = getAuth(app).currentUser
    if(!user){
        return(<NoUser/>)
    }else{
        return children
    }
}

export {PrivateRoute}
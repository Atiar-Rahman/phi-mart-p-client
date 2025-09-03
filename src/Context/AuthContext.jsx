import { createContext} from "react";

import useAuth from "../hooks/useAuth";

const AuthContext = createContext()

export const AuthProvider = ({children}) =>{

    const allContext = useAuth()

 


    // return children
    return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
    )
}

export default AuthContext;
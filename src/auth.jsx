import React, { useContext, useState } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"

const adminList = [
    'Jeyfredc', 'LorenaM', 'OscarB'
]

const AuthContext = React.createContext()

function AuthProvider({ children }) {

    const navigate = useNavigate()
    const [user, setUser] = useState(null)     
    const location = useLocation();
    const from = location.state?.from || "/";

    const login = (username) => {
        const isAdmin = adminList.find(admin => admin === username)
        setUser({
            username, isAdmin
        })
        navigate(from, { replace: true });
    }

    const logout = () => {
        setUser(null)
        navigate("/")
    }


    const auth = {
        user,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const auth = useContext(AuthContext)
    return auth
}

function AuthRoute(props){
    const auth = useAuth()
    const location = useLocation()
    if(!auth.user){
        return <Navigate to="/login" state={{ from: location }} replace/>
    }
    return props.children
}


export {
    AuthProvider,
    useAuth,
    AuthRoute
}
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Menu = () => {

    const routes = [
        { path: "/", name: "Home" },
        { path: "/blog", name: "Blog" },
        { path: "/profile", name: "Profile" },
        { path: "/login", name: "Login" },
        { path: "/logout", name: "Logout" },
    ]
  return (
    <nav>
        <ul>
            {routes.map((route) => (
                <li key={route.path}>
                    <NavLink to={route.path} style={({isActive}) => {
                        return {
                            color: isActive ? "red" : "blue",
                        }
                    }}>{route.name}</NavLink>
                </li>
            ))}
        </ul>
    </nav>
  )
}
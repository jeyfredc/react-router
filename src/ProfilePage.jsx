import React from 'react'
import { useAuth } from './auth'

export const ProfilePage = () => {
    const auth = useAuth()
  return (
    <>
    <h1>
    Perfil
      </h1>  
      <p>Welcome, {auth.user.username}  </p>
    </>
  )
}

import React from 'react'
import { AuthRoute, useAuth } from './auth'

export const ProfilePage = () => {
    const auth = useAuth()
  return (
    <AuthRoute>
    <h1>
    Perfil
      </h1>  
      <p>Welcome, {auth.user.username}  </p>
    </AuthRoute>
  )
}

import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../useAuthStatus'
import Spinner from './Spinner/Spinner'
import React from 'react'

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute
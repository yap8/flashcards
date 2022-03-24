import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('authToken')

    navigate('/login')
  }, [])

  return (
    <div>...</div>
  )
}

export default Logout

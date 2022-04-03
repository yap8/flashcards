import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/authActions'

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(logout())

    navigate('/login')
  }, [dispatch, logout])

  return (
    <div>...</div>
  )
}

export default Logout

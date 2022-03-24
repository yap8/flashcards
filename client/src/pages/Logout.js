import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeToken } from '../redux/actions/userActions'

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(removeToken())

    navigate('/login')
  }, [])

  return (
    <div>...</div>
  )
}

export default Logout

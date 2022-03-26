import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import usePrivate from '../hooks/usePrivate'

const Home = () => {
  usePrivate()
  // useEffect(() => {
  //   if (!authToken) navigate('/login')
  // }, [authToken, navigate])


  return (
    <section className="profile">
      <div className="profile__inner container">
        <Title>Welcome</Title>

      </div>
    </section>
  )
}

export default Home

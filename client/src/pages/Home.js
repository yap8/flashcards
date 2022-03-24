import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'

const Home = () => {
  const { authToken } = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authToken) navigate('/login')
  }, [authToken])


  return (
    <section className="profile">
      <div className="profile__inner container">
        <Title>Welcome</Title>

      </div>
    </section>
  )
}

export default Home

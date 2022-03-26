import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const usePrivate = () => {
  const { authToken } = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authToken) navigate('/login')
  }, [])
}

export default usePrivate

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const usePrivate = (redirect = '/login') => {
  const { authToken } = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authToken) navigate(redirect)
  }, [])
}

export default usePrivate

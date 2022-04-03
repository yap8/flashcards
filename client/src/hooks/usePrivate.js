import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const usePrivate = (redirect = '/login') => {
  const { user } = useSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate(redirect)
  }, [navigate, user, redirect])
}

export default usePrivate

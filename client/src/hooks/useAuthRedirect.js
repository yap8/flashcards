import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useAuthRedirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/')
    }
  }, [navigate])
}

export default useAuthRedirect

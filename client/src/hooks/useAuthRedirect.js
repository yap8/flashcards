import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useAuthRedirect = (path='/') => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate(path)
    }
  }, [navigate])
}

export default useAuthRedirect

import { useEffect } from "react"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"

const useAlert = () => {
  const { error, success, message } = useSelector(state => state.app)

  useEffect(() => {
    if (success && message) toast.success(message)

    if (error && message) toast.error(message)
  }, [success, error, message])
}

export default useAlert

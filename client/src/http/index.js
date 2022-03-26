import axios from 'axios'

const api = axios.create({
  withCredentials: true
})

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`

  return config
})

export default api

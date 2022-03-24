import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () =>
  localStorage.getItem('authToken') ? <Outlet /> : <Navigate to="/login" />

export default PrivateRoute

import { Navigate, Outlet } from 'react-router-dom';
const useAuth = () => {
  const token=localStorage.getItem('token');
  return token ? true : false
}

const  ProtectedRoutes=() =>{
  const auth=useAuth()
  return auth?<Outlet/>: <Navigate to="/"/>
}

export default ProtectedRoutes;

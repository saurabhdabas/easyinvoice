import { Navigate, Outlet } from 'react-router-dom';
const useAuth = () => {
  const verifiedUser=localStorage.getItem('user');
  return verifiedUser ? true : false
}

const  ProtectedRoutes=() =>{
  const auth=useAuth()
  return auth?<Outlet/>: <Navigate to="/"/>
}

export default ProtectedRoutes;

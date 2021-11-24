import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/auth-selectors';

export default function PrivateRoute({ component: C }) {
  const isAuth = useSelector(getIsAuth);
  return <>{isAuth ? <C /> : <Navigate to="/login" />}</>;
}

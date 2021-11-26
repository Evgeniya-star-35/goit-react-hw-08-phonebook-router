import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ isAuth, component: Component }) {
  console.log(Component);
  return <>{isAuth ? <Component /> : <Navigate to="/login" />}</>;
}

import { Navigate } from 'react-router-dom';

export default function PublicRoute({ isAuth, component: Component }) {
  return (
    <>{isAuth ? <Navigate to="/contacts" /> && <Component /> : <Component />}</>
  );
}

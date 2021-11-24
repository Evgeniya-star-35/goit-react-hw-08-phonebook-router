import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/auth-selectors';

export default function PrivateRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const isAuth = useSelector(getIsAuth);
  return (
    <Route {...routeProps}>
      {isAuth ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import AppBar from '../AppBar/AppBar';
import { getIsFetchCurrentUser } from '../../redux/auth/auth-selectors';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import Container from '../../components/Container';
import { getCurrentUser } from '../../redux/auth/auth-operations';

const HomePage = lazy(() =>
  import(
    '../../pages/HomePage/HomePage.js' /* webpackChunkName: "home-page" */
  ),
);
const Registration = lazy(() =>
  import(
    '../../pages/Registration/Registration.js' /* webpackChunkName: "register-page" */
  ),
);
const Login = lazy(() =>
  import('../../pages/Login/Login.js' /* webpackChunkName: "login-page" */),
);
const Phonebook = lazy(() =>
  import(
    '../../pages/Phonebook/Phonebook.js' /* webpackChunkName: "phonebook-page" */
  ),
);

const App = () => {
  const dispatch = useDispatch();
  const isFetchCurrentUser = useSelector(getIsFetchCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    !isFetchCurrentUser && (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<Loader />}>
            <Switch>
              <PublicRoute exact path="/" component={HomePage}></PublicRoute>

              <PublicRoute path="/register" redirectTo="/" restricted>
                <Registration />
              </PublicRoute>

              <PublicRoute
                path="/login"
                restricted
                redirectTo="/"
                component={Login}
              ></PublicRoute>

              <PrivateRoute
                path="/contacts"
                component={Phonebook}
                redirectTo="/login"
              />
            </Switch>
          </Suspense>
        </Container>
      </>
    )
  );
};

export default App;

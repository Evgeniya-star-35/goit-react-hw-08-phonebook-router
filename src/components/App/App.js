import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
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
const Register = lazy(() =>
  import(
    '../../pages/Register/Register.js' /* webpackChunkName: "register-page" */
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
            <Routes>
              <Route path="/" element={<PublicRoute component={HomePage} />} />
              <Route
                path="/contacts"
                element={<PrivateRoute component={Phonebook} />}
              />
              <Route
                path="/login"
                element={<PublicRoute component={Login} />}
              />
              <Route
                path="/register"
                element={<PublicRoute component={Register} />}
              />
            </Routes>
          </Suspense>
        </Container>
      </>
    )
  );
};

export default App;

import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { getIsAuth } from '../../redux/auth/auth-selectors';
import { register } from '../../redux/auth/auth-operations';
import { toast } from 'react-toastify';
import { BtnSubmit } from '../../components/BtnSubmit/BtnSubmit';
import s from './Register.module.css';

export default function Register() {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const validate = useCallback(values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length < 3) {
      errors.name = 'Name should be longer then 3 symbols';
    }
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8 || values.password.length > 12) {
      errors.password =
        'Password should be longer then 7 symbols and shorter than 12 symbols';
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Password is not confirmed!';
    }
    return errors;
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate({ name, email, password });
    if (validationErrors.password === undefined) {
      dispatch(register({ name, email, password }));
      toast.success('You are registered!', {
        position: 'top-center',
        autoClose: 2500,
      });
    }
    if (validationErrors.password !== undefined) {
      toast.error(`${validationErrors.password}`, {
        position: 'top-center',
        autoClose: 4000,
      });
    }
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h2 className={s.title}>Create account</h2>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            placeholder="Your name"
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            placeholder="Your email"
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            required
            className={s.input}
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={handleChange}
          />
        </label>
        <BtnSubmit />
      </form>
      {isAuth && <Navigate to="/" />}
    </>
  );
}

import { useState } from 'react';
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
    dispatch(register({ name, email, password }));
    toast.success('You are registered!', {
      position: 'top-center',
      autoClose: 2500,
    });
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
            className={s.input}
            type="password"
            name="password"
            value={password}
            placeholder="Your password"
            onChange={handleChange}
          />
        </label>
        <BtnSubmit />
      </form>
      {isAuth && <Navigate to="/" />}
    </>
  );
}

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { logOut } from '../../redux/auth/auth-operations';
import { getUserName } from '../../redux/auth/auth-selectors';
import defaultAvatar from '../../images/user.jpg';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const avatar = defaultAvatar;
  const handleLogOut = () => {
    dispatch(logOut());
    toast.info('You logged out of your account !', {
      position: 'top-center',
      autoClose: 2500,
    });
  };
  return (
    <div className={s.container}>
      <img
        src={avatar}
        alt="avatar"
        width="32"
        height="32"
        className={s.avatar}
      />
      <span className={s.name}>Welcome,{name}!</span>
      <button className={s.button} type="button" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}

import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <h1 className={s.title}>
        <b className={s.text}>Welcome!</b> To use the Phone Book, please log in
        or sign up.
      </h1>
    </>
  );
};
export default HomePage;

import s from './HomePage.module.css';
const HomePage = () => {
  return (
    <>
      <h1 className={s.title}>
        <b className={s.text}>Welcome!</b> Enjoy using the phonebook!
      </h1>
    </>
  );
};
export default HomePage;

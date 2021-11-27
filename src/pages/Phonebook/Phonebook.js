import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/Phonebook/phonebook-operations';
import Form from '../../components/Form';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactsList';
import s from './Phonebook.module.css';

export default function Phonebook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h2 className={s.title}>Phonebook</h2>
      <Form />
      <Filter />
      <h3 className={s.contactTitle}>Contacts</h3>
      <ContactList />
    </>
  );
}

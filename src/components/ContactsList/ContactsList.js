import Contact from '../Contact';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/Phonebook/phonebook-selectors';
import { deleteContact } from '../../redux/Phonebook/phonebook-operations';
import s from './ContactsList.module.css';

export default function ContactsList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    toast.success('Contact deleted!', {
      position: 'top-center',
      autoClose: 3000,
    });
  };

  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(({ name, number, id }) => (
          <li className={s.item} key={id}>
            <Contact name={name} number={number} />

            <button
              className={s.button}
              type="button"
              onClick={() => handleDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

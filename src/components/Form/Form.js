import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getContacts } from '../../redux/Phonebook/phonebook-selectors';
import { contactsOperations } from '../../redux/Phonebook';
import s from './Form.module.css';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const comparableElement = contacts.some(
      element => element.name.toLowerCase() === name.toLowerCase(),
    );
    if (comparableElement) {
      reset();
      return alert(`${name} is already in the directory`);
    }
    dispatch(contactsOperations.addContact({ name, number }));
    toast.success('Contact added to the phonebook!', {
      position: 'top-center',
      autoClose: 2500,
    });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          onChange={handleInputChange}
          value={name}
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.label}>
        Phone number
        <input
          value={number}
          className={s.input}
          onChange={handleInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        <span className={s.btnText}> Add contact</span>
      </button>
    </form>
  );
}

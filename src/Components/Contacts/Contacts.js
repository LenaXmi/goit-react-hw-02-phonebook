import s from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.ContactItem}>
          <p className={s.ContactData}>
            {name}: {number}
          </p>
          <button
            onClick={() => onDeleteContact(id)}
            className={s.ContactDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Contacts;

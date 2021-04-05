import ContactItem from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
// import { filterContacts } from '../../redux/contacts/contacts-actions';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    marginBottom: '10px',
  },
});

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const classes = useStyles();

  const normalizeFilter = filter.toLowerCase();
  const filtrContactList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <>
      <ul className={classes.list}>
        {filtrContactList.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;


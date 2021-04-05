import { useState } from 'react';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  form: {
    padding: '5px',
    border: ['1px', 'solid', '#2f2f2f'],
    borderRadius: '4px',
  },
  button: {
    marginTop: '10px',
  },
});

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleNameChange = e => setName(e.target.value);
  const handleNumberChange = e => setNumber(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(name);
    if (name === '') return;
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div>
        <label>
          <p>Name</p>
          <input
            type="text"
            // name='name'
            onChange={handleNameChange}
            value={name}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            // name='name'
            onChange={handleNumberChange}
            value={number}
          />
        </label>
      </div>
      <button className={classes.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

// const mapDispatchToProps = dispatch => ({
//   onSubmit: name => dispatch(addContact(name)),
// });

export default ContactForm;


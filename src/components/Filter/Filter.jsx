import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions';

const Filter = () => {
  const [searchChange, setSearchChange] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = e => {
    setSearchChange(e.target.value);
  };
  dispatch(filterContacts(searchChange));
  return (
    <>
      <p>Find contacts by name </p>
      <input type="text" onChange={handleSearchChange}  />
    </>
  );
};

export default Filter;

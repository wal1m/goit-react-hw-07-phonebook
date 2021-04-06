import axios from 'axios';
import * as actions from './contacts-actions';

axios.defaults.baseURL = 'http://localhost:8080';

export const fetchContact = () => async dispatch => {
  dispatch(actions.fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactSuccess(error));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(actions.fetchContactSuccess(data)))
  //   .catch(error => dispatch(actions.fetchContactSuccess(error)));
};

export const addContact = contact => dispatch => {
  // const { name, number } = contact;
  // console.log(name, number);

  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

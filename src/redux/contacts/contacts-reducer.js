import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './contacts-actions';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const items = (state = initialState, action) => {
//   switch (action.type) {
//     case types.ADD:
//       if (state.find(({ name }) => name === action.payload.name)) {
//         alert(`${action.payload.name} is already in contacts`);
//         return state;
//       }

// const items = createReducer(initialState, {
//   [addContact]: (state, action) => {
//     if (state.find(({ name }) => name === action.payload.name)) {
//       alert(`${action.payload.name} is already in contacts`);
//     } else {
//       // console.log('contact+');
//       // [...state, action.payload]
//     }
//   },
//   [deleteContact]: (state, action) =>
//     state.filter(contact => contact.id !== action.payload),
// });


const items = createReducer(initialState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});


const filter = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

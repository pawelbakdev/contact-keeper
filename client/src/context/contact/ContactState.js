import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: 'personal',
        name: 'Ted Johnson',
        email: 'sara@gmail.com',
        phone: '777 888 999'
      },
      {
        type: 'professional',
        name: 'Sara Smith',
        email: 'sara@gmail.com',
        phone: '555 666 777'
      },
      {
        type: 'professional',
        name: 'Paweł Bąk',
        email: 'pawel@gmail.com',
        phone: '333 444 555'
      },
      {
        type: 'professional',
        name: 'Jan Nowak',
        email: 'jan@gmail.com',
        phone: '111 222 333'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  // Delete Contact
  // Set Current Contact
  // Clear current Contact
  // Update Contact
  // Filter Contact
  // CLear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;

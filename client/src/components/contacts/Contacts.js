import React, { useContext, useEffect, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spiner from '../layout/Spiner';

const Contacts = () => {
  const { contacts, filtered, loading, getContacts } = useContext(
    ContactContext
  );

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts && contacts.length === 0) return <h4>Please add a contact</h4>;

  return (
    <Fragment>
      {contacts && !loading ? (
        <TransitionGroup>
          {filtered
            ? filtered.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))
            : contacts.map(contact => (
                <CSSTransition
                  key={contact._id}
                  timeout={500}
                  classNames='item'
                >
                  <ContactItem contact={contact} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spiner />
      )}
    </Fragment>
  );
};

export default Contacts;

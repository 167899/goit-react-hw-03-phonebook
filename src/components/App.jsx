import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitState = data => {
    if (!contacts.find(e => e.name.toLowerCase() === data.name.toLowerCase())) {
      resetFilter();
      setContacts(prevState => [...prevState, data]);
    } else {
      alert('Нє... Уже є такий!');
    }
  };

  const filterState = filterValue => {
    setFilter(filterValue);
  };

  const resetFilter = () => {
    setFilter('');
  };

  const delContact = e => {
    setContacts(prevState => {
      const delContact = prevState.filter(
        contact => contact.id !== e.target.parentElement.id && contact.id
      );
      return delContact;
    });
  };

  const newContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div
      style={{
        height: '100vh',
        marginLeft: '40px',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitState} />

      <h2>Contacts</h2>
      <Filter filterProp={filterState} value={filter} />
      <ContactsList contacts={newContacts()} del={delContact} />
    </div>
  );
};

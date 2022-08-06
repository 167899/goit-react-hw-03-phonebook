import React, { Component } from 'react';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  formSubmitState = data => {
    if (!this.state.contacts.find(e => e.name.toLowerCase() === data.name.toLowerCase())) {
      this.resetFilter();
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, data],
        };
      });
    } else {
      alert('Нє... Уже є такий!');
    }
  };

  filterState = filterValue => {
    this.setState(() => {
      return {
        filter: filterValue,
      };
    });
  };

  resetFilter = () => {
    this.setState({ filter: '' });
  };

  delContact = e => {
    this.setState(prevState => {
      const delContacts = prevState.contacts.filter(
        contact => contact.id !== e.target.parentElement.id && contact.id
      );

      return {
        contacts: delContacts,
      };
    });
  };

  render() {
    const newContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
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
        <Form onSubmit={this.formSubmitState} />

        <h2>Contacts</h2>
        <Filter filterProp={this.filterState} value={this.state.filter} />
        <ContactsList contacts={newContacts} del={this.delContact} />
      </div>
    );
  }
}

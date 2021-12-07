import React, { Component } from 'react';
import Container from './Components/Container';
import Form from './Components/Form';
import Contacts from './Components/Contacts';
import Filter from './Components/Filter';
import initialContacts from './initialContacts.json';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  formSubmitHandler = formData => {
    const { name } = formData;
    const { contacts } = this.state;
    const existingContact = contacts.find(contact => name === contact.name);
    if (existingContact) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [formData, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({
      filter: value,
    });
  };
  findContact = () => {
    const { contacts, filter } = this.state;
    const normalizeContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeContacts),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.findContact();

    return (
      <Container>
        <h1 className={s.Title}>Phonebook</h1>
        <Form submit={this.formSubmitHandler} />
        <h2 className={s.Title}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;

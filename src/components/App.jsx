import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
const { Component } = require('react');

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  // componentDidMount() {
  //   this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  // }

  // componentDidUpdate(_, prevState) {
  //   if (this.state.contacts.length !== prevState.contacts.length) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  handleSubmitForm = contact => {
    return this.state.contacts.some(cont => {
      return cont.name.toLowerCase() === contact.name.toLowerCase();
    })
      ? alert(`${contact.name} is already in contacts.`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
  };

  handelDelet = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleFilterContact = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm handleSubmitForm={this.handleSubmitForm} />

        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          handleFilterChange={this.handleFilterChange}
        />

        <ContactList
          contactList={this.handleFilterContact}
          handelDelet={this.handelDelet}
        />
      </div>
    );
  }
}

// /contacts

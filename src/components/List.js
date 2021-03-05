import React, { Component } from 'react';
import Contact from './Contact';

export default class List extends Component {
  state = {
    contacts: [
      {
        id: 1,
        nom: 'Bruce Wayne',
        email: 'bruce@gmail.com',
        tel: '06 01 02 03 04'
      },
      {
        id: 2,
        nom: 'Ellen Ripley',
        email: 'ripley@gmail.com',
        tel: '06 00 00 00 00'
      },
      {
        id: 3,
        nom: 'John Snow',
        email: 'j.snow@gmail.com',
        tel: '06 11 22 33 44'
      }
    ]
  }

  remove = (id) => {
    const newContacts = this.state.contacts.filter( contact => contact.id !== id)

    this.setState({
      contacts: newContacts
    })
  }

  render() {
    return (
      <>
        {this.state.contacts.map(contact => (
          <Contact 
            key={contact.id}
            nom={contact.nom}
            email={contact.email}
            tel={contact.tel}
            removeClick={() => this.remove(contact.id)} //Make an anonymous function if we want to pass parameters to the function
          />
        ))}
      </>
    )
  }
}

import React, { Component, Fragment } from 'react';
import { Consumer } from '../context'

import Contact from './Contact';

export default class List extends Component {

  // remove = (id) => {
  //   const newContacts = this.state.contacts.filter( contact => contact.id !== id)

  //   this.setState({
  //     contacts: newContacts
  //   })
  // }

  render() {
    return (
      <Consumer>
        {value => {
          return(
            <Fragment>
              {value.contacts.map(contact => (
                <Contact 
                  key={contact.id}
                  id={contact.id}
                  nom={contact.nom}
                  email={contact.email}
                  tel={contact.tel}
                  // removeClick={() => this.remove(contact.id)} //Make an anonymous function if we want to pass parameters to the function
                />
              ))}
            </Fragment>
          )
        }}
      </Consumer>
    )
  }
}

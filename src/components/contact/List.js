import React, { Component } from 'react';
import { Consumer } from '../../context'

import Contact from './Contact';

export default class List extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          return(
            <div className="mx-4">
              <h2 className="mt-8 text-2xl font-bold">Mes contacts</h2>

              {value.contacts.map(contact => (
                <Contact 
                  key={contact.id}
                  id={contact.id}
                  nom={contact.nom}
                  email={contact.email}
                  tel={contact.tel}
                />
              ))}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

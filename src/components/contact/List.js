import React, { Component, Fragment } from 'react';
import { Consumer } from '../../context'

import Contact from './Contact';

export default class List extends Component {

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
                />
              ))}
            </Fragment>
          )
        }}
      </Consumer>
    )
  }
}

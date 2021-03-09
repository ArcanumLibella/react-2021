import React, { Component } from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
    switch(action.type) {
        case 'REMOVE_CONTACT' :
            return {
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            }
        case 'ADD_CONTACT' :
            return {
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state
    }
}

export class Provider extends Component {
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
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
      }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer 
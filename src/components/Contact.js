import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faSortDown, faTimes } from '@fortawesome/free-solid-svg-icons'


export default class Contact extends Component {
  state = {
    show: true
  }

  removeContact = () => {
    this.props.removeClick()
  }

  showContact = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div 
        className="card-contact relative m-4 p-4 shadow-md bg-indigo-100 rounded"
        >
        <FontAwesomeIcon 
          icon={faTimes} 
          className="absolute right-4 cursor-pointer"
          onClick={() => this.removeContact()}
        />
        <h4 className="uppercase font-bold pb-2 mb-2 border-b-2 border-indigo-600">
          {this.props.nom}
          <FontAwesomeIcon 
            icon={faSortDown} 
            className="ml-2 cursor-pointer"
            onClick={() => this.showContact()}
          />
        </h4>

        {this.state.show ? (
          <ul className="mb-4">
            <li className="">
              <span className="font-medium mr-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2"/>
                Téléphone :
              </span>
              {this.props.tel}
            </li>
            <li className="">
              <span className="font-medium mr-2">
                <FontAwesomeIcon icon={faEnvelope}  className="mr-2"/>
                Email : 
              </span>
              {this.props.email}
            </li>
          </ul>
        ) : null }
      </div>
    )
  }
}

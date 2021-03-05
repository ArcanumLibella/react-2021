import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faSortDown } from '@fortawesome/free-solid-svg-icons'


export default class Contact extends Component {
  render() {
    return (
      <div className="card-contact m-4 p-4 shadow-md bg-indigo-100 rounded">
        <h4 className="uppercase font-bold mb-2">
          {this.props.nom}
          <FontAwesomeIcon icon={faSortDown} className="ml-2"/>
        </h4>

        <ul className="mb-4">
          <li className="">
            <span className="font-medium">
              <FontAwesomeIcon icon={faPhone} className="mr-2"/>
              Téléphone :
            </span>
            {this.props.tel}
          </li>
          <li className="">
            <span className="font-medium">
              <FontAwesomeIcon icon={faEnvelope}  className="mr-2"/>
              Email : 
            </span>
            {this.props.email}
          </li>
        </ul>
      </div>
    )
  }
}

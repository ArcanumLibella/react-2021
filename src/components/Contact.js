import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="card-contact m-4 p-4 shadow-md bg-indigo-100 rounded">
        <h4 className="uppercase font-bold mb-2">
          {this.props.nom}
        </h4>

        <ul className="mb-4">
          <li className="">
            <span className="font-medium">Téléphone : </span>{this.props.tel}
          </li>
          <li className="">
            <span className="font-medium">Email : </span>{this.props.email}
          </li>
        </ul>
      </div>
    )
  }
}

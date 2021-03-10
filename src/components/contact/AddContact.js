import React, { Component } from 'react'
import { Consumer } from './../../context'
import {v1 as uuid} from "uuid"; 

export default class AddContact extends Component {
    state = {
        name: "",
        email: "",
        tel: ""
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (dispatch, event) => {
        event.preventDefault()
        const newContact = {
            id: uuid(),
            nom: this.state.name,
            email: this.state.email,
            tel: this.state.tel
        }

        dispatch({type: 'ADD_CONTACT', payload: newContact})

        // TO RESET INPUT ON SUBMIT
        this.setState({
            name: "",
            email: "",
            tel: ""
        })

        // TO REDIRECT ON REPERTORY AFTER SUBMIT
        this.props.history.push('/react-2021')
    }


    render() {
        return(
            <Consumer>
                {value => {
                    return(
                        <form 
                            className="m-4 p-4 bg-indigo-300 rounded"
                            onSubmit={this.onSubmit.bind(this, value.dispatch)}
                        >
                            <h2 className="mb-2 font-bold">Ajouter un contact :</h2>
                            <fieldset className="flex flex-col mb-2">
                                <label className="mb-2 font-semibold" htmlFor="name">
                                    Nom
                                </label>
                                <input 
                                    className="p-2 rounded focus:outline-none"
                                    type="text"
                                    name="name"
                                    placeholder="Clark Kent"
                                    value={this.state.nom}
                                    onChange={this.onChange}
                                />
                            </fieldset>
                            <fieldset className="flex flex-col mb-2">
                                <label className="mb-2 font-semibold" htmlFor="email">
                                    Email
                                </label>
                                <input 
                                    className="p-2 rounded focus:outline-none"
                                    type="text"
                                    name="email"
                                    placeholder="clark.kent@metropolis.com"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </fieldset>
                            <fieldset className="flex flex-col mb-2">
                                <label className="mb-2 font-semibold" htmlFor="email">
                                    Téléphone
                                </label>
                                <input 
                                    className="p-2 rounded focus:outline-none"
                                    type="text"
                                    name="tel"
                                    placeholder="07.12.14.33.88"
                                    value={this.state.tel}
                                    onChange={this.onChange}
                                />
                            </fieldset>

                            <input 
                                className="my-4 py-2 px-4 mx-auto w-full rounded bg-indigo-600 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                                type="submit"
                                value="Ajouter au répertoire"
                            />
                        </form>
                    )
                }}
            </Consumer>
        )
    }
}

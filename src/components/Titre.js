import React from 'react';
import PropTypes from 'prop-types';

function Titre(props) {
  return (
    <h1>Bonjour je m'appelle {props.nom}</h1>
  )
}

Titre.propsType = {
  nom: PropTypes.string.isRequired
}

export default Titre;

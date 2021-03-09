import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="p-4 mx-auto shadow-md bg-indigo-600">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="md:text-xl text-white uppercase font-black">AppContacts</Link>

        <ul className="flex text-white">
          <li className="flex-auto cursor-pointer mx-2 sm:mx-4">
            <Link to="/list">Répertoire</Link>
          </li>
          <li className="flex-auto cursor-pointer mx-2 sm:mx-4">
            <Link to="/add">Ajouter</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
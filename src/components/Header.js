import React from 'react';

function Header() {
  return (
    <header className="p-4 mx-auto shadow-md bg-indigo-600">
      <nav className="container mx-auto flex justify-between">
        <a href="/" className="md:text-xl text-white uppercase font-black">AppContacts</a>

        <ul className="flex text-white">
          <li className="flex-auto mx-2 sm:mx-4">Accueil</li>
          <li className="flex-auto mx-2 sm:mx-4">Item 2</li>
          <li className="flex-auto mx-2 sm:mx-4">Item 3</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
import { Component } from 'react';

import Titre from './components/Titre';

class App extends Component {
  state = {
    nom1: 'Fiona',
    nom2: 'Emma',
    nom3: 'Victor'
  }

  render() {
    return (
      <div className="App">
        <Titre nom={this.state.nom1}/>
        <Titre nom={this.state.nom2}/>
        <Titre nom={this.state.nom3}/>
      </div>
    );
  }
}

export default App;
import { Component } from 'react';
import { Provider } from './context'

import Header from './components/Header';
import List from './components/List';
import Intro from './components/Intro';

class App extends Component {

  render() {
    return (
      <Provider>
        <div className="App">
          <Header />

          <div className="sm:container mx-auto">
            <Intro />
            <List />
          </div>

        </div>
      </Provider>
    );
  }
}

export default App;
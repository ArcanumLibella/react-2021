import { Component } from 'react';
import { Provider } from './context'

import Header from './components/layout/Header';
import List from './components/contact/List';
import Intro from './components/Intro';
import AddContact from './components/contact/AddContact';

class App extends Component {

  render() {
    return (
      <Provider>
        <div className="App">
          <Header />

          <div className="container mx-auto max-w-screen-sm">
            <Intro />
            <AddContact />
            <List />
          </div>

        </div>
      </Provider>
    );
  }
}

export default App;
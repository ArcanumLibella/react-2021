import { Component } from 'react';
import { Provider } from './context'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/layout/Header';
import List from './components/contact/List';
import Intro from './components/Intro';
import AddContact from './components/contact/AddContact';

class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />

            <div className="container mx-auto max-w-screen-sm">
              <Route exact path="/" component={Intro} />
              <Route exact path="/" component={List} />
              <Route exact path="/list" component={List} />
              <Route exact path="/add" component={AddContact} />
            </div>

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
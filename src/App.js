import { Component } from 'react';
import { Provider } from './context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/layout/Header';
import List from './components/contact/List';
import Intro from './components/Intro';
import AddContact from './components/contact/AddContact';
import Error from './components/pages/Error';

class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />

            <div className="container mx-auto max-w-screen-sm">
              <Switch>
                <Route exact path="/react-2021">
                  <Intro />
                  <List />
                </Route>
                <Route exact path="/react-2021" component={List} />
                <Route exact path="/react-2021/list" component={List} />
                <Route exact path="/react-2021/add" component={AddContact} />
                <Route component={Error} />
              </Switch>
            </div>

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducers from '../reducers/index'
import Index from './index'
import Header from './Header'
import Ver from './ver'
import Nuevo from './nuevo'

const createStoreWithMiddleware = applyMiddleware()(createStore)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={ createStoreWithMiddleware(reducers) }>
            <BrowserRouter>
              <div>
                <Header />
                <Switch>
                  <Route exact path="/" component={Index} />
                  <Route path="/usuarios/nuevo" component={Nuevo} />
                  <Route path="/usuarios/:id" component={Ver} />
                </Switch>
              </div>
            </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

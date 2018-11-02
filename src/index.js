import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import './styles/App.css'
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'

const createStoreWithMiddleware = applyMiddleware()(createStore)

const AppContainer = () => {
  return (
    <Provider store={ createStoreWithMiddleware(reducers) }>
      <App />
    </Provider>
  )
}

ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

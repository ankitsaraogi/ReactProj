import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/AppContainer';
import * as API from './core/api';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import Middleware from './core/middleware';
import { createLogger } from 'redux-logger';
import { fetchCities, fetchVehicles } from './actions';

const middleware = [ Middleware ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const configureStore = () => {   
    return createStore(
      reducer,
      applyMiddleware(...middleware)
    );
  }
  
export const store = configureStore();

store.dispatch(fetchCities());
store.dispatch(fetchVehicles());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();



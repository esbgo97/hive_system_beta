import React from 'react';

import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { configureStore, history } from './store';

import './App.css';
import Routes from './infraestructure/routes/Routes';

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>

  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { configureStore, history } from './store';

//Pages
import HomePage from './ui/pages/main/Home'
import LoginPage from './ui/pages/auth/Login'
import SignUpPage from './ui/pages/auth/SignUp'

import './App.css';

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Login" component={LoginPage} />
          <Route exact path="/SignIn" component={SignUpPage} />
        </Router>
      </ConnectedRouter>

    </Provider>

  );
}

export default App;

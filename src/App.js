import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Pages
import HomePage from './ui/pages/main/Home'

import LoginPage from './ui/pages/auth/Login'
import SignUpPage from './ui/pages/auth/SignUp'

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/Login" component={LoginPage} />
      <Route exact path="/SignIn" component={SignUpPage} />
    </Router>
  );
}

export default App;

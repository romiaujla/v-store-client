import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing';
import SignUpPage from '../../Routes/SignUpPage/SignUpPage';
import LoginPage from '../../Routes/LoginPage/LoginPage';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Navbar} />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/login' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;

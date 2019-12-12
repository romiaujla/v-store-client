import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';


function App() {
  return (
    <div className='App'>
      <Switch>
      <Navbar />
        <Route exact path='/' component={Landing} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;

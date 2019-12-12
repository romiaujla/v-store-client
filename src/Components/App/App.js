import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Landing from '../Landing/Landing'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    </div>
  );
}

export default App;

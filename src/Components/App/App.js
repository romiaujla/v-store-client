import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing';
import SignUpPage from '../../Routes/SignUpPage/SignUpPage';
import LoginPage from '../../Routes/LoginPage/LoginPage';
import ExplorePage from '../../Routes/ExplorePage/ExplorePage';
import ShopPage from '../../Routes/ShopPage/ShopPage';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false,
      shops: [],
    }
  }

  // get all the shops
  getShops = () => {
    
  }

  componentWillMount = () => {

  }


  render() { 
    return (
      <div className='App'>
      <Route path='/' component={Navbar} />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/explore' component={ExplorePage} />
        <Route exact path='/shop/:id' component={ShopPage} />
      </Switch>
    </div>
    );
  }
}


import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from '../Navbar/Navbar'
import Landing from '../Landing/Landing';
import SignUpPage from '../../Routes/SignUpPage/SignUpPage';
import LoginPage from '../../Routes/LoginPage/LoginPage';
import ExplorePage from '../../Routes/ExplorePage/ExplorePage';
import ShopPage from '../../Routes/ShopPage/ShopPage';
import ShopListContext from '../../Contexts/ShopListContext';
import ShopService from '../../Service/ShopService';
import SellerProfile from '../SellerProfile/SellerProfile'

export default class App extends Component {

  static contextType = ShopListContext;

  constructor(props) {
    super(props);
    this.state = { 
      loggedIn: false,
    }
  }

  componentDidMount = () => {
    
    // get all the shops and set to context
    ShopService.getShops()
      .then((shops) => {
        this.context.setShops(shops);
      })
      .catch(err => {
        console.log(err)
      })

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
        <Route exact path='/shops/:shopId' component={SellerProfile}/>
      </Switch>
    </div>
    );
  }
}


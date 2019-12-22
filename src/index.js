import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './Components/App/App'
import { ShopListProvider } from './Contexts/ShopListContext';
import { ShopProvider } from './Contexts/ShopContext'

ReactDOM.render(
  <BrowserRouter>
    <ShopListProvider>
      <ShopProvider>
        <App/>
      </ShopProvider>
    </ShopListProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

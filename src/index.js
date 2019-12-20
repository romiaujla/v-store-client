import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './Components/App/App'
import { ShopsProvider } from './Contexts/ShopContext';

ReactDOM.render(
  <BrowserRouter>
    <ShopsProvider>
      <App />
    </ShopsProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

import { div } from 'prelude-ls';
import React from 'react';
import {Switch ,Route} from 'react-router-dom'
import ShopPage from './pages/shope/shop.component';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';


function App() {
  return ( 
  <div> 
    <Header/>
    <switch>
    <Route exact path='/' component={HomePage}/>
    <Route  path='/shop' component={ShopPage}/>
    </switch>
    
  </div>
  )
  
}

export default App;

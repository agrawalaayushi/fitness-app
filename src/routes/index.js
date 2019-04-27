import React from 'react';
import {
  BrowserRouter, Route, Switch
 } from 'react-router-dom';
import Home from '../components/home/home';
import '../styles/index.css';

export default () => (
   <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Home {...props}/>} />
      <Route path="/schedule" exact render={props => <Home {...props}/>} />
    </Switch>
   </BrowserRouter>
 )
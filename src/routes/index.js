import React from 'react';
import {
  BrowserRouter, Route, Switch
 } from 'react-router-dom';
import Schedule from '../components/main/schedule/schedule';
import Overview from '../components/main/overview';
import Articles from '../components/main/articles';
import { Header } from '../components/header/header';
import { Error404 } from '../components/common/error404';
import '../styles/index.css';

export default () => (
   <BrowserRouter>
      <div className="route-container">
        {/* <Header/> */}
        <Route  path="/" render={(props) => <Header {...props}/>} />
        <Switch>
          <Route path="/" exact render={(props) => <Schedule {...props}/>} />
          <Route path="/schedule" exact render={(props) => <Schedule {...props}/>} />
          <Route path="/overview" exact render={(props) => <Overview {...props}/>} />
          <Route path="/articles" exact render={(props) => <Articles {...props}/>} />
          <Route component={Error404} />
        </Switch>
    </div>
   </BrowserRouter>
 )
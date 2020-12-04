import React, { Component } from 'react';



import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import './components/layouts/css/Navbar.css';
import Footer from './components/layouts/Footer';
import './components/layouts/css/Footer.css';

import './components/pages/css/generalContent.css';

import { Switch, Route } from 'react-router-dom';

import MyProfile from './components/pages/MyProfile';
import Home from './components/pages/Home';
import MyActivity from './components/pages/MyActivity';
import Bookmarks from './components/pages/Bookmarks';
import Error from './components/pages/PageNotFound';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/profile" component={MyProfile}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/activity" component={MyActivity}></Route>
        <Route path="/bookmarks" component={Bookmarks}></Route>
        <Route component={Error}></Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;

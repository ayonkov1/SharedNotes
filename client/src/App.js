import React,{Fragment} from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import SignUpImage from "./assets/signup-image.jpg";
import {
  BrowserRouter as Router,
  Route,
  Switch,

  Redirect,
} from "react-router-dom";
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import PrivateRoute from './components/Routing/PrivateRoute';
import MyProfile from './components/pages/MyProfile';
//import Home from './components/pages/Home';
import Search from './components/pages/Search';
import MyActivity from './components/pages/MyActivity';
import Bookmarks from './components/pages/Bookmarks';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import './components/layouts/css/Navbar.css';
import Footer from './components/layouts/Footer';
import './components/layouts/css/Footer.css';

import './components/pages/css/generalContent.css';

const App=()=> {
  return (
<Fragment>
   <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Auth} />
          <PrivateRoute exact path='/home' component={Home} />
          <PrivateRoute exact path='/profile' component={MyProfile} />
          <PrivateRoute exact path='/activity' component={MyActivity} />
          <PrivateRoute exact path='/bookmarks' component={Bookmarks} />
          <PrivateRoute exact path='/search' component={Search} />
        </Switch>
      </Router>
     
        </Provider>
    </Fragment>
 );
}

export default App;

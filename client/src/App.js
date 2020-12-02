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
const App=()=> {
  return (
<Fragment>
   <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Auth} />
          <PrivateRoute exact path='/home' component={Home} />
        </Switch>
      </Router>
     
        </Provider>
    </Fragment>
 );
}

export default App;

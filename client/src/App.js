
import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import FooterCont from './components/FooterCont';

import { Provider } from 'react-redux'
import store from './store'
import {loadUser} from './actions/authActions'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <Home/>
          <FooterCont/>
        </div>
      </Provider>
    );
  }
}

export default App;

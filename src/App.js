import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout.jsx';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="app">
    
    <Switch>
        <Route path="/login">
            <Login/>
        </Route>

        <Route path="/checkout">
             <Header/>
            <Checkout />
        </Route>
    
         <Route path="/">
           <Header/>
           <Home /> 
         </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;

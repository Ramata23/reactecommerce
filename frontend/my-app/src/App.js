import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav } from 'react-bootstrap';

// import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header"></div>
          <div className="content">
            <Switch>
              <Route exact path="/Home" component={Home} />
              <Route exact path="/" component={SignIn} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/AddProduct" component={AddProduct} />
              <Route exact path="/ProductList" component={ProductList} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

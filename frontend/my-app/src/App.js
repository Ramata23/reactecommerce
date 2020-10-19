import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


// import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/SignIn">SignIn</NavLink>
            <NavLink exact activeClassName="active" to="/SignUp">SignUp</NavLink>
            <NavLink activeClassName="active" to="/Dashboard">Dashboard</NavLink>
            {/* <NavLink activeClassName="active" to="/AddProduct">AddProduct</NavLink> */}
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/SignIn" component={SignIn} />
              <Route exact path="/SignUp" component={SignUp} />
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route exact path="/AddProduct" component={AddProduct} />

              {/* <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} /> */}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

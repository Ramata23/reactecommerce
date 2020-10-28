import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './Dashboard.css';

class Dashboard extends React.Component {
  // handle click event of logout button
  handleLogout = () => {
    this.props.history.push('/');
  };
  handleDashboard = () => {
    this.props.history.push('/Dashboard');
  };
  handleAddProduct = () => {
    this.props.history.push('/AddProduct');
  };
  handleProductList = () => {
    this.props.history.push('/ProductList');
  };

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Button
                variant="danger"
                type="submit"
                onClick={this.handleLogout}
                value="Logout"
              >
                Logout
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Navbar>
            <Button
              variant="outline-primary"
              type="submit"
              onClick={this.handleDashboard}
              value="Logout"
            >
              Dashboard
            </Button>
            <Button
              variant="outline-primary"
              type="submit"
              onClick={this.handleAddProduct}
              value="Logout"
            >
              Add Product
            </Button>
            <Button
              variant="outline-primary"
              type="submit"
              onClick={this.handleProductList}
              value="Logout"
            >
              ProductList
            </Button>
          </Navbar>
        </Nav>
        <br />
        Welcome User! Here you can post a product or see the product you want
        with all its informations.
        <br />
        <br />
      </div>
    );
  }
}

export default Dashboard;

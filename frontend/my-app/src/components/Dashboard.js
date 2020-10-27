import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import './Dashboard.css';

class Dashboard extends React.Component {
  // handle click event of logout button
  handleLogout = () => {
    this.props.history.push('/');
  };
  handleAddproduct = () => {
    this.props.history.push('/AddProduct');
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Button
            variant="danger"
            type="submit"
            onClick={this.handleAddproduct}
            value="Logout"
          >
            Add Product
          </Button>
        </nav>
        Welcome User! Here you can post a product or see the product you want
        with all its informations.
        <br />
        <br />
      </div>
    );
  }
}

export default Dashboard;

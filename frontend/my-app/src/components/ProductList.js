import React from 'react';
import { Form, Button, Nav, Navbar } from 'react-bootstrap';
import './Dashboard.css';

class ProductList extends React.Component {
  // handle click event of logout button
  handleLogout = () => {
    this.props.history.push('/');
  };
  handleAddproduct = () => {
    this.props.history.push('/AddProduct');
  };
  handleProductList = () => {
    this.props.history.push('/ProductList');
  };
  handleDashboard = () => {
    this.props.history.push('/Dashboard');
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
          <Nav.Item>
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/AddProduct"> Add Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/ProductList">ProductList</Nav.Link>
          </Nav.Item>
        </Nav>
        <br />
        <br />
      </div>
    );
  }
}

export default ProductList;

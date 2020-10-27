import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

class Home extends React.Component {
  // handle click event of logout button
  //    handleLogout = () => {

  //     this.props.history.push('/SignIn');
  //   }
  //    handleAddproduct = () => {

  //     this.props.history.push('/AddProduct');
  //   }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/">SignIn</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="SignUp">SignUp</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Home;

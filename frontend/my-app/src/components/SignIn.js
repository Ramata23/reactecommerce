import React, { useState } from 'react';
import { Form, Button, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { signInUser } from '../store/actions/users';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailaddress: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.send = this.send.bind(this);
  }
  handleClick(elm) {
    console.log('omg');
    this.setState({
      [elm.target.name]: elm.target.value,
    });
  }

  send(event) {
    event.preventDefault();
    console.log('sending data');
    const logindata = {
      emailaddress: this.state.emailaddress,
      password: this.state.password,
    };

    axios
      .post('http://localhost:3000/users/sign-in', logindata)
      .then((response) => {
        if (response.status == 200) {
          console.log('response', response);
          // localStorage.setItem('token', response.data.token);
          let decoded = jwt.decode(response.data.token);
          console.log('deco', decoded);
          let userToSend = {
            token: response.data.token,
            id: decoded.id,
            email: decoded.email,
          };

          this.props.signInUser(userToSend);
          this.props.history.push('/Dashboard');
        } else {
          console.log('mot de passe ou email incorrect');
        }
      });
  }
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
        <Form>
          <Form.Group controlId="emailaddress">
            <Form.Label>emailaddress</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter emailaddress"
              value={this.state.emailaddress}
              name="emailaddress"
              onChange={this.handleClick}
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={this.state.password}
              name="password"
              onChange={this.handleClick}
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button onClick={this.send} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {};
};

const mapDispatchToProps = { signInUser };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));

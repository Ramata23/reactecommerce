import React from 'react';
import { Form, Button, Nav, Navbar } from 'react-bootstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      profilepicture: '',
      emailaddress: '',
      password: '',
      confirmpassword: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.validate = this.validate.bind(this);
    this.send = this.send.bind(this);
  }
  handleClick(elm) {
    console.log('omg');
    this.setState({
      [elm.target.name]: elm.target.value,
    });
  }
  validate() {}

  send(event) {
    event.preventDefault();
    console.log('sending data');
    const logindata = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      profilepicture: this.state.profilepicture,
      emailaddress: this.state.emailaddress,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword,
    };

    axios
      .post('http://localhost:3000/users/sign-up', logindata)
      // .then(response=>response.status)
      .then((response) => {
        console.log(response);
        this.props.history.push('/');

        // if (response.status == 200) {
        //     this.props.history.push('/SignIn')

        // } else {
        //   console.log('erreur');
        // }
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
        <Form onSubmit={this.validate}>
          <Form.Group controlId="firstname">
            <Form.Label>firstname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter firstname"
              value={this.state.firstname}
              name="firstname"
              onChange={this.handleClick}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="lastname">
            <Form.Label>lastname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter lastname"
              value={this.state.lastname}
              name="lastname"
              onChange={this.handleClick}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="profilepicture">
            <Form.Label>profilepicture</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter profilepicture"
              value={this.state.profilepicture}
              name="profilepicture"
              onChange={this.handleClick}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="emailaddress">
            <Form.Label>emailaddress</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter emailaddress"
              value={this.state.emailaddress}
              name="emailaddress"
              onChange={this.handleClick}
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
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="confirmpassword">
            <Form.Label>confirmpassword</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter confirmpassword"
              value={this.state.confirmpassword}
              name="confirmpassword"
              onChange={this.handleClick}
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

export default SignUp;

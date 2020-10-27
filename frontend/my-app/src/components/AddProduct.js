import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect } from 'react-redux';

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
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
      name: this.state.name,
      description: this.state.description,
      picture: this.state.picture,
      price: this.state.price,
    };

    axios
      .post(
        'http://localhost:3000/products',
        logindata
        // {
        // headers: {
        //   Authorization: 'tok'+ this.state.myToken
        // } }
      )
      .then((response) => {
        if (response.status == 200) {
          this.props.history.push('/Dashboard');
        } else {
          console.log('erreur');
        }
      });
  }
  render() {
    return (
      <div>
        <h1>Add Product</h1>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={this.state.name}
              name="name"
              onChange={this.handleClick}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>description</Form.Label>
            <Form.Control
              type="description"
              placeholder="Enter description"
              value={this.state.description}
              name="description"
              onChange={this.handleClick}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="picture">
            <Form.Label>picture</Form.Label>
            <Form.Control
              type="picture"
              placeholder="Enter picture"
              value={this.state.picture}
              name="picture"
              onChange={this.handleClick}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="price">
            <Form.Label>price</Form.Label>
            <Form.Control
              type="price"
              placeholder="Enter price"
              value={this.state.price}
              name="price"
              onChange={this.handleClick}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Button onClick={this.send} variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </div>
    );
  }
}

// const mapStateToProps = (state /*, ownProps*/) => {
//   return {};
// };

// const mapDispatchToProps = { signInUser };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withRouter(AddProduct));
export default AddProduct;

import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import ReactDOM from 'react-dom';


class SignIn extends React.Component{
  constructor (props){
      super(props)
      this.state={
        emailaddress: '', password: ''
      }
      this.handleClick=this.handleClick.bind(this)
      this.send=this.send.bind(this)
  }
  handleClick(elm){
      console.log("omg")
      this.setState({
          [elm.target.name]: elm.target.value
      })
  }
 
  send(event){
    event.preventDefault();
    console.log("sending data");
     const logindata={
      emailaddress:this.state.emailaddress,
      password:this.state.password,
     }
    
     axios.post('http://localhost:3000/users/sign-in',  logindata )
      .then((response) => {
        if (response.status == 200) {
            this.props.history.push('/Dashboard')

        } else {
          console.log('erreur');
        }
      })
  }
  render(){
  return (
        <div>  
          <Form>
  <Form.Group controlId="emailaddress">
    <Form.Label>emailaddress</Form.Label>
    <Form.Control type="emailaddress" placeholder="Enter emailaddress" value={this.state.emailaddress} name="emailaddress" onChange={this.handleClick}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="password">
    <Form.Label>password</Form.Label>
    <Form.Control type="password" placeholder="Enter password" value={this.state.password} name="password" onChange={this.handleClick}/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  
  <Button onClick={this.send} variant="primary" type="submit">
    Submit
  </Button>             
  

</Form>  
        </div>
      )
   }
}
 
ReactDOM.render(<SignIn />, document.getElementById('root'));
export default SignIn;
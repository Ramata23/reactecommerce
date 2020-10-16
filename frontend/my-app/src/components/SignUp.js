import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import ReactDOM from 'react-dom';


// function SignUp(props) {
//   const emailaddress = useFormInput('');
//   const password = useFormInput('');
//   const [error] = useState(null);
//   const [loading] = useState(false);
 
//   // handle button click of login form
//   const handleLogin = () => {
//     props.history.push('/SignIn');
//   }


//     <Form>
//          <Form.Group controlId="formfirstname">
//     <Form.Label>First Name</Form.Label>
//     <Form.Control type="text" placeholder="Enter your first name" />
//     </Form.Group>
//     <Form.Group controlId="formlastname">
//     <Form.Label>Last Name</Form.Label>
//     <Form.Control type="text" placeholder="Enter your last name" />
//     </Form.Group>
//     <Form.Group controlId="formprofilepicture">
//     <Form.Label>Profile picture</Form.Label>
//     <Form.Control type="text" placeholder="Enter your profile picture link's" />
//     </Form.Group>
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" {...emailaddress} autoComplete="new-password" placeholder="Enter email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" {...password} autoComplete="new-password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group controlId="formConfirmPassword">
//     <Form.Label>Confirm Password</Form.Label>
//     <Form.Control type="password" {...password} autoComplete="new-password" placeholder="Password" />
//   </Form.Group>
//   {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

//   <Button variant="success" type="submit" value={loading ? 'Loading...' : 'Submit'} onClick={handleLogin} disabled={loading}>
//     Submit
//   </Button>
// </Form>

// class SignUp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { firstname: '',lastname: '',profilepicture: '',emailaddress: '',password: '',confirmpassword: '' };
//   }
 
//   myChangeHandler = (event) => {
//     this.setState({firstname: event.target.value});
//   }

// render() {
//   return (
//   );
// }
// }


// const useFormInput = initialValue => {
//   const [value, setValue] = useState(initialValue);
 
//   const handleChange = e => {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange: handleChange
//   }
// }
class SignUp extends React.Component{
  constructor (props){
      super(props)
      this.state={
        firstname: '', lastname: '', profilepicture: '', emailaddress: '', password: '', confirmpassword: '' 
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
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      profilepicture:this.state.profilepicture,
      emailaddress:this.state.emailaddress,
      password:this.state.password,
      confirmpassword:this.state.confirmpassword,
     }
     axios.post('/signup', logindata )
      .then(response=>response.data)

  }
  render(){
  return (
        <div>    
          <form>
             <input type="firstname" placeholder="firstname" value={this.state.firstname} name="firstname" onChange={this.handleClick}/>
             <input type="lastname" placeholder="lastname" value={this.state.lastname} name="lastname" onChange={this.handleClick}/>
             <input type="profilepicture" placeholder="profilepicture" value={this.state.profilepicture} name="profilepicture" onChange={this.handleClick}/>
             <input type="emailaddress" placeholder="emailaddress" value={this.state.emailaddress} name="emailaddress" onChange={this.handleClick}/>
             <input type="password" placeholder="password" value={this.state.password} name="password" onChange={this.handleClick}/>             
             <input type="confirmpassword" placeholder="confirmpassword" value={this.state.confirmpassword} name="confirmpassword" onChange={this.handleClick}/>           

             <input onClick={this.send} type="submit"/>
          </form>
        </div>

      )
   }
}
 
ReactDOM.render(<SignUp />, document.getElementById('root'));
export default SignUp;

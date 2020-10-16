import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
 

 
function SignUp(props) {
  const emailaddress = useFormInput('');
  const password = useFormInput('');
  const [error] = useState(null);
  const [loading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    props.history.push('/SignIn');
  }
 
  return (
    <Form>
         <Form.Group controlId="formfirstname">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your first name" />
    </Form.Group>
    <Form.Group controlId="formlastname">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your last name" />
    </Form.Group>
    <Form.Group controlId="formprofilepicture">
    <Form.Label>Profile picture</Form.Label>
    <Form.Control type="text" placeholder="Enter your profile picture link's" />
    </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" {...emailaddress} autoComplete="new-password" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" {...password} autoComplete="new-password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formConfirmPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" {...password} autoComplete="new-password" placeholder="Password" />
  </Form.Group>
  {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />

  <Button variant="success" type="submit" value={loading ? 'Loading...' : 'Submit'} onClick={handleLogin} disabled={loading}>
    Submit
  </Button>
</Form>

  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default SignUp;
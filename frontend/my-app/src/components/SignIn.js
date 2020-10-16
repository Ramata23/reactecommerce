import React, { useState } from 'react';
import axios from 'axios';

import { Form, Button } from "react-bootstrap";

function SignIn(props) {
    const [loading, setLoading] = useState(false);
    const emailaddress = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    // handle button click of login form
    const handleLogin = () => {
        props.history.push('/Dashboard');
    }

  

    return (
        <Form>
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

export default SignIn;
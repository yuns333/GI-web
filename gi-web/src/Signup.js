import React from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Signup extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type="userid" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default Signup
;
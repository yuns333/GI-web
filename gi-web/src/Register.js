import React from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            requestId:'',
            requestPassword:'',
            requestEmail:''
        };

        this.requestIdChange = this.requestIdChange.bind(this);
        this.requestPasswordChange = this.requestPasswordChange.bind(this)
        this.requestEmailChange = this.requestEmailChange.bind(this)
    }

    requestIdChange(event){
		this.setState({requestId: event.target.value});
	}
	requestPasswordChange(event){
		this.setState({requestPassword: event.target.value});
    }
    requestEmailChange(event){
		this.setState({requestEmail: event.target.value});
    }

    onSubmit(){
		let userInfo={
			'userid':this.state.requestId,
            'password':this.state.requestPassword,
            'email':this.state.requestEmail
		};

        fetch('/register',
        {
			method: 'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userInfo)
        })
        .then((response)=> response.json())
	    .then((responseData)=>{
	    	if(responseData.loginresult){
	    		console.log("success");
            }
            else{
                console.log("fail");
            }
	    });
	}

    render(){
        return(
            <Form>
                <Form.Group controlId="formBasicId">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter Id" value={this.state.requestId} onChange={this.requestIdChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.requestPassword} onChange={this.requestPasswordChange}/>
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={this.state.requestPassword} onChange={this.requestPasswordChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" value={this.state.requestEmail} onChange={this.requestEmailChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default Register
;
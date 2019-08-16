import React from 'react';
import 'whatwg-fetch';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            requestId:'',
            requestPassword:''
        };
        this.requestIdChange = this.requestIdChange.bind(this);
        this.requestPasswordChange = this.requestPasswordChange.bind(this)
    }

    requestIdChange(event){
		this.setState({requestId: event.target.value});
	}
	requestPasswordChange(event){
		this.setState({requestPassword: event.target.value});
    }
    
    onSubmit(){
		let userInfo={
			'userid':this.state.requestId,
			'password':this.state.requestPassword
		};

        fetch('/login',
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
	    		this.props.onLogin(this.state.requestId);
	    	}
	    	else{
                console.log(responseData)
				this.setState({
					requestId:'',
					requestPassword:''
				});
	    	}
	    });
	}

    render(){
        return(
            <Form>
                <Form.Group controlId="formBasicId">
                    <Form.Label>User ID</Form.Label>
                    <Form.Control type="text" name ="requestId" placeholder="Enter email" value={this.state.requestId} onChange={this.requestIdChange}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name ="requestPassword" placeholder="Password" value={this.state.requestPassword} onChange={this.requestPasswordChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.onSubmit.bind(this)}>
                    Submit
                </Button>
            </Form>
        )
    }
}

export default Login;
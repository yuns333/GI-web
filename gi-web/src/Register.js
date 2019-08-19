//회원가입 화면
import React from 'react';
import axios from 'axios';
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
			userid: this.state.requestId,
            password: this.state.requestPassword,
            email: this.state.requestEmail
        };
        
        axios({
            method: 'post',
            url: '/register',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(userInfo)
          })
          .then(function (response) {
            window.confirm('회원가입 성공')
            console.log("----------------response::", response);
          })
          .catch(function (error) {
            window.confirm('회원가입 실패')
            console.log("----------------error::", error);
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
                <Button variant="primary" type="submit" onClick={this.onSubmit.bind(this)}>
                    Submit
                </Button>
            </Form>
        )
    }
}

export default Register
;
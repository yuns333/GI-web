//로그인화면
import React from 'react';
import axios from 'axios';
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
        var that = this;
		let userInfo={
			userid: this.state.requestId,
			password: this.state.requestPassword
        };

        console.log("---------------userInfo::", userInfo);
        axios({
            method: 'post',
            url: '/login',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: userInfo
          })
          .then(function (response) {
            console.log("----------------response::", response);
            if(response.data.code == 200){
                window.alert(response.data.message)
                that.props.onLogin(that.state.requestId);
            }
            else{
                window.alert(response.data.message)
            }
          })
          .catch(function (error) {    
            console.log("----------------error::", error);
            window.alert('로그인 실패');
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
                <Button variant="primary" onClick={this.onSubmit.bind(this)}>
                    Submit
                </Button>
            </Form>
        )
    }
}

export default Login;
//프로젝트 등록 화면
import React from 'react';
import axios from 'axios';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class RegistProject extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            requestUserId: this.props.userId,
            requestProjectName:'',
            requestProjectManager:'',
            requestProjectUrl:'',
            requestDescription:''
        };

        this.requestProjectNameChange = this.requestProjectNameChange.bind(this)
        this.requestProjectManagerChange = this.requestProjectManagerChange.bind(this)
        this.requestProjectUrlChange = this.requestProjectUrlChange.bind(this)
        this.requestDescriptionChange = this.requestDescriptionChange.bind(this)
    }

	requestProjectNameChange(event){
		this.setState({requestProjectName: event.target.value});
    }
    requestProjectManagerChange(event){
		this.setState({requestProjectManager: event.target.value});
    }
    requestProjectUrlChange(event){
		this.setState({requestProjectUrl: event.target.value});
    }
    requestDescriptionChange(event){
		this.setState({requestDescription: event.target.value});
    }

    onSubmit(){
        var that = this;
		let projectInfo={
			userid: this.state.requestUserId,
            projectname: this.state.requestProjectName,
            projectmanager: this.state.requestProjectManager,
            projecturl: this.state.requestProjectUrl,
            description: this.state.requestDescription
        };

        console.log("-----------projectinfo::", projectInfo);
        
        axios({
            method: 'post',
            url: '/project/register',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: projectInfo
          })
          .then(function (response) {
            console.log("----------------response::",response);
            if(response.data.code == 200){
              window.alert(response.data.message)
              that.props.setManageProjectKey(0); 
            }
            else{
              window.alert(response.data.message)
            }
          })
          .catch(function (error) {
            console.log("----------------error::",error);
            window.alert('프로젝트 등록 실패')
          });
	}

    render(){
        return(
            <Form>
                <Form.Group controlId="formBasicId">
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control type="text" placeholder="Project Name" value={this.state.requestProjectName} onChange={this.requestProjectNameChange} />
                    <Form.Label>Project Manager</Form.Label>
                    <Form.Control type="text" placeholder="Project Manager" value={this.state.requestProjectManager} onChange={this.requestProjectManagerChange}/>
                    <Form.Label>Project Url</Form.Label>
                    <Form.Control type="text" placeholder="Project Url" value={this.state.requestProjectUrl} onChange={this.requestProjectUrlChange}/>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" value={this.state.requestDescription} onChange={this.requestDescriptionChange}/>
                </Form.Group>
                <Button variant="primary" onClick={this.onSubmit.bind(this)}>
                    Submit
                </Button>
            </Form>
        )
    }
}

export default RegistProject
;
//프로젝트 관리 화면
import React from 'react';
import axios from 'axios';
import {ListGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import RegistProject from './RegistProject';
import ProjectDashBoard from './ProjectDashBoard'

class ManageProject extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ManageProjectKey: 0,
            projectInfo: null,
            selectedProjectName: ''
        };
        this.getProjectInfo = this.getProjectInfo.bind()
    }
    
    getProjectInfo(){
        var that = this;
        axios({
            method: 'get',
            url: '/project/show',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
          })
          .then(function (response) {
            that.setState ({projectInfo : response.body})
            console.log("----------------response::",response);
          })
          .catch(function (error) {
            window.confirm('프로젝트 불러오기 실패')
            console.log("----------------error::",error);
          });
    }

    goToRegistProject(){
        this.setState({
            ManageProjectKey: 1,
        })
    }

    goToProjectDashBoard(name){
        this.setState({
            ManageProjectKey: 2,
            selectedProjectName: name
        })
    }

    render(){
        let body;
        let projectInfo;

        for(var i in this.state.projectInfo){
            var name = this.state.projectInfo[i].name;
            projectInfo += <ListGroup.Item action onClick={()=>this.goToProjectDashBoard(name)}>{name}</ListGroup.Item>
        }

        if(this.state.ManageProjectKey == 0){
            body =  
            <div>
                <ListGroup>
                    {projectInfo}
                </ListGroup>
                <Button variant="primary" type="submit" onClick={()=>this.goToRegistProject()}>
                    프로젝트 등록
                </Button>
            </div>
        }
        else if(this.state.ManageProjectKey == 1){
            body = <RegistProject userId={this.props.userId}/>
        }
        else if(this.state.ManageProjectKey == 2){
            body = <ProjectDashBoard projectName = {this.state.selectedProjectName}/>
        }
        return(
           <div>
               {body}
           </div>
        );
    }
}

export default ManageProject;
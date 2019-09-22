//프로젝트 관리 화면
import React from 'react';
import axios from 'axios';
import {ListGroup} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import RegistProject from './RegistProject';
import ProjectDashBoard from './ProjectDashBoard'
import './ManageProject.css';

class ManageProject extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            manageProjectKey: 0,
            projectInfo: null,
            projectInfoMapping: null ,
            selectedProjectName: ''
        };
    }

    getProjectInfo(){
        var that = this;
        let userId = {
            userid:this.props.userId
        }
        axios({
            method: 'post',
            url: '/api/project/show',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: userId
          })
          .then(function (response) {
            console.log("----------------response::",response);
              if(response.data.code == 200){
                var temp = response.data.data;
                var projectInfo = temp.map((x,i)=>
                    {return (<ListGroup.Item action onClick={()=>that.setState({manageProjectKey:2,selectedProjectName:x.projectname })}>{x.projectname}</ListGroup.Item>)}
                )
                console.log("----------------response::",projectInfo);
                that.setState({projectInfo: response.data.data, projectInfoMapping : projectInfo})
              }
              else{
                window.alert(response.data.message)
              }
          })
          .catch(function (error) {
            console.log("----------------error::",error);
            window.alert('프로젝트 불러오기 실패')
          });
    }

    setManageProjectKey(k){
        this.setState({
            manageProjectKey: k,
        })
    }

    componentDidMount() {
        console.log("---------------componentdidmount::")
        this.getProjectInfo();
    }

    render(){

        let body;
        let projectInfo = this.state.projectInfoMapping;

        console.log("-----------------this.state.projectInfo::",this.state.projectInfo);
        console.log("-----------------projectInfo::",projectInfo);
        console.log("-----------------managiProjectKey::",this.state.manageProjectKey);

        if(this.state.manageProjectKey == 0){
            body =  
            <div>
                <center>
                <ListGroup className="project-list">
                    {projectInfo}
                </ListGroup>
                <Button className="button" variant="primary" onClick={()=>this.setState({manageProjectKey:1})}>
                    프로젝트 등록
                </Button>
                </center>
            </div>
        }
        else if(this.state.manageProjectKey == 1){
            body = <RegistProject userId={this.props.userId} setManageProjectKey={(k)=>this.setManageProjectKey(k)} />
        }
        else if(this.state.manageProjectKey == 2){
            body = <ProjectDashBoard userId={this.props.userId} projectName = {this.state.selectedProjectName}/>
        }
        return(
           <div>
               {body}
           </div>
        );
    }
}

export default ManageProject;
import React from 'react';
import axios from 'axios';

class ProjectDashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dashBoardInfo: '',
        };
    }

    getDashBoardInfo(){
        var that = this;
        axios({
            method: 'get',
            url: '/project/show',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: {
                "projectname": that.props.projectName,
            }
          })
          .then(function (response) {
            that.setState ({dashBoardInfo : response.body})
            console.log("----------------response::",response);
          })
          .catch(function (error) {
            window.confirm('대시보드 불러오기 실패')
            console.log("----------------error::",error);
          });
    }

    render(){
        return(
            <div>
                {this.state.dashBoardInfo}
            </div>
        )
    }
}

export default ProjectDashBoard;
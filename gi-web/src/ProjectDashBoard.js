import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'
import {ButtonGroup} from 'react-bootstrap'

class ProjectDashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            topPages: '',
            browsers:'',
            devices:'',
            os:'',
            activeUsers:'',
            totalUsers:'',
            referrers:'',
            funnel:'',
            period: 'd'
        };
    }

    setPeriod(k){
        this.setState({
            period: k,
        })
    }

    getDashBoardInfo(){
        var that = this;

        //Top pages
        axios({
            method: 'post',
            url: '/top-pages',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                "user": that.props.userId,
                "project": that.props.projectName,
                "period":that.state.period
            }
          })
          .then(function (response) {
            console.log("----------------response::",response);
            that.setState ({dashBoardInfo : response.data})
          })
          .catch(function (error) {
            window.alert('대시보드 불러오기 실패')
            console.log("----------------error::",error);
          });

          //browsers breakdown 
          axios({
            method: 'post',
            url: '/browsers',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                "user": that.props.userId,
                "project": that.props.projectName,
                "period":that.state.period
            }
          })
          .then(function (response) {
            that.setState ({dashBoardInfo : response.data})
            console.log("----------------response::",response);
          })
          .catch(function (error) {
            window.alert('대시보드 불러오기 실패')
            console.log("----------------error::",error);
          });


          //devices breakdown
          axios({
            method: 'post',
            url: '/devices',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                "user": that.props.userId,
                "project": that.props.projectName,
                "period":that.state.period
            }
          })
          .then(function (response) {
            that.setState ({dashBoardInfo : response.data})
            console.log("----------------response::",response);
          })
          .catch(function (error) {
            window.alert('대시보드 불러오기 실패')
            console.log("----------------error::",error);
          });

          //os breakdown
          axios({
            method: 'post',
            url: '/os',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                "user": that.props.userId,
                "project": that.props.projectName,
                "period":that.state.period
            }
          })
          .then(function (response) {
            that.setState ({dashBoardInfo : response.data})
            console.log("----------------response::",response);
          })
          .catch(function (error) {
            window.alert('대시보드 불러오기 실패')
            console.log("----------------error::",error);
          });


          //active users
          axios({
            method: 'post',
            url: '/active-users',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                "user": that.props.userId,
                "project": that.props.projectName,
                "period":that.state.period
            }
          })
          .then(function (response) {
            that.setState ({dashBoardInfo : response.data})
            console.log("----------------response::",response);
          })
          .catch(function (error) {
            window.alert('대시보드 불러오기 실패')
            console.log("----------------error::",error);
          });


          //total users
          axios({
            method: 'post',
            url: '/total-users',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                "user": that.props.userId,
                "project": that.props.projectName,
                "period":that.state.period
            }
          })
          .then(function (response) {
            that.setState ({dashBoardInfo : response.data})
            console.log("----------------response::",response);
          })
          .catch(function (error) {
            window.alert('대시보드 불러오기 실패')
            console.log("----------------error::",error);
          });


          //referrers
          axios({
            method: 'post',
            url: '/referrers',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                "user": that.props.userId,
                "project": that.props.projectName,
                "period":that.state.period
            }
          })
          .then(function (response) {
            that.setState ({dashBoardInfo : response.data})
            console.log("----------------response::",response);
          })
          .catch(function (error) {
            window.alert('대시보드 불러오기 실패')
            console.log("----------------error::",error);
          });


          //funnel api
          axios({
            method: 'post',
            url: '/funnel',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                "user": that.props.userId,
                "project": that.props.projectName,
                "period":{
                    "from":"now-1d",
                    "to":"now"
                },
                "flow":[
                    "/",
                    "/api/pattern/PATTERN1",
                    "/api/component/COMPONENT1"
                ]
            }
          })
          .then(function (response) {
            that.setState ({dashBoardInfo : response.data})
            console.log("----------------response::",response);
          })
          .catch(function (error) {
            window.alert('대시보드 불러오기 실패')
            console.log("----------------error::",error);
          });
    }

    render(){
        this.getDashBoardInfo()
        return(
            <div>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary" onClick={(k)=>this.setPeriod("d")}>day</Button>
                  <Button variant="secondary" onClick={(k)=>this.setPeriod("w")}>week</Button>
                  <Button variant="secondary" onClick={(k)=>this.setPeriod("M")}>month</Button>
                </ButtonGroup>
                {this.state.dashBoardInfo}
            </div>
        )
    }
}

export default ProjectDashBoard;
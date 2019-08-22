import React from 'react';
import axios from 'axios';
import {Chart} from 'react-google-charts';

class ActiveUsers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active_user_data:''
        };
    }

    getDashBoardInfo(){
        var that = this;
        console.log("-----------data::",that.props.userId, that.props.projectName, that.props.period)

          //active users
          axios({
            method: 'post',
            url: '/api/active-users',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                "user": that.props.userId,
                "project": that.props.projectName,
                "period":that.props.period
            }
          })
          .then(function (response) {
            var temp = response.data;
            console.log("-----------temp::",temp);
            var active_user_data = new Array();
            active_user_data.push(["Date", "Active Users"]);
            for(var i=0; i<temp.length ; i++)
            {
                active_user_data.push([temp[i].range, temp[i].count]);
            }
            console.log("-----------active_user_data::",active_user_data);
            that.setState({
                active_user_data: active_user_data
            })
          })
          .catch(function (error) {
            window.alert('대시보드 불러오기 실패')
            console.log("----------------error::",error);
          });
    }

    componentDidMount() {
        console.log("---------------componentdidmount::")
        this.getDashBoardInfo()
    }

    render(){
        const options = {
            legend: {position: 'none'} ,
            hAxis: {
                title: 'Time'
            },
            vAxis: {
                title: 'Active User'
            },
            chart: {
            title: 'Active Users over time',
            },
            series: {
                0: { color: '#43459d'}
            }
        };
        return(
            <div>
                <h1 >
                    Active users over time
                </h1>
                <Chart
                chartType="Line"
                width="100%"
                height="400px"
                data={this.state.active_user_data}
                options={options}/>
            </div>
        )
    }
}

export default ActiveUsers;
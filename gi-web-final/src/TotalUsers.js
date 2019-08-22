import React from 'react';
import axios from 'axios';
import {Chart} from 'react-google-charts';

class TotalUsers extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            total_user_data:''
        };
    }

    getDashBoardInfo(){
        var that = this;
        console.log("-----------data::",that.props.userId, that.props.projectName, that.props.period)

          //total users
          axios({
            method: 'post',
            url: '/api/total-users',
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
              var total_user_data = new Array();
              total_user_data.push(["Date", "Total Users"])
              for(var i=0; i<temp.length ; i++)
              {
                  total_user_data.push([temp[i].to, temp[i].count]);
              }
              that.setState({
                total_user_data:total_user_data
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
                title: 'Total User'
            },
            chart: {
            title: 'Total Users over time',
            },
            series: {
                0: { color: '#6f9654'}
            }
        };
        return(
            <div>
                <h1 >
                    Active users over time
                </h1>
                <Chart chartType="Line" width="100%" height="400" data={this.state.total_user_data} options={options}/>
            </div>
        )
    }
}

export default TotalUsers;
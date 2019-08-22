import React from 'react';
import axios from 'axios';
import D3Funnel from 'd3-funnel';

class Funnel extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    getDashBoardInfo(){
        var that = this;
        console.log("-----------data::",that.props.userId, that.props.projectName, that.props.period)

         //funnel api
         axios({
            method: 'post',
            url: '/api/funnel',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: {
                "user": that.props.userId,
                "project": that.props.projectName,
                "period":{
                    "from":"now-1w",
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
            var data = response.data;
            console.log("-----------funnelData::", data);
                         const options = {
                         chart: {
                             bottomPinch:1,
                             animate:150,
             
                         },
                         block: {
                             dynamicHeight: true,
                             minHeight: 15,
                             highlight: true
                             },
                         tooltip: {
                             enabled: true,
                         }
                         };
                         const chart = new D3Funnel('#funnel');
                         chart.draw(data, options);
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
        return(
            <div>
                <h1>
                    Funnel chart
                </h1>
                <div id="funnel"/>
            </div>
        )
    }
}

export default Funnel;
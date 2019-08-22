import React from 'react';
import axios from 'axios';
import {Chart} from 'react-google-charts';

class TopPages extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            TopUrlData:'',
        }
    }

    getDashBoardInfo(){
        var that = this;
        console.log("-----------data::",that.props.userId, that.props.projectName, that.props.period)
    
        //Top pages
        axios({
            method: 'post',
            url: '/api/top-pages',
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
            console.log("--------------------response::", response);
                var temp = response.data;
                console.log("--------------------temp::", temp);
                var TopUrlData= new Array();
                TopUrlData.push(["Url", "Count"]);
                for (var i=0; i<temp.length; i++)
                {
                    TopUrlData.push([temp[i].key, temp[i].doc_count]);
                }
                that.setState({
                    TopUrlData: TopUrlData,
                })

                console.log("--------------------top::", that.state.TopUrlData);
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
            showRowNumber: true,
              page: 'enable', 
              pageSize: 10,
              pagingSymbols: {
                prev: 'prev',
                next: 'next'
              },
              paingButtonConfiguration: 'auto'
        }
        return(
            <div >
                <h1>Top Pages</h1>
                <Chart chartType="Table" width="100%" height="400" data={this.state.TopUrlData} options={options}/>
            </div>
        )
    }
    
}

export default TopPages
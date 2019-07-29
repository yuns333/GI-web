//css디자인
//서버에 올리기

import React from 'react';
import {Tabs} from 'react-bootstrap'
import {Tab} from 'react-bootstrap'
import axios from 'axios'
import Iframe from 'react-iframe'
import logo from './logo.svg';
import './App.css';

class DashBoard5 extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="Dashborad5">
        {this.props.dashboard5}
      </div>
    )
  }
}

class DashBoard4 extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="Dashborad4">
        {this.props.dashboard4}
      </div>
    )
  }
}

class DashBoard3 extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="Dashborad3">
        {this.props.dashboard3}
      </div>
    )
  }
}

class DashBoard2 extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="dashboard2">
        {this.props.dashboard2}
      </div>
    )
  }
}

class DashBoard1 extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="dashboard1">
        {this.props.dashboard1}
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      serverIp:"http://165.22.243.237/",
      dashboard1:null,
      dashboard2:null,
      dashboard3:null,
      dashboard4:null,
      dashboard5:null,
    } 
  }

  selectTab(s){
    if(s==="dashboard1"){
      this.getDashBoard1Info(s);
    }
    else if("s===dashboard2"){
      this.getDashBoard2Info(s);
    }
    else if("s===dashboard3"){
      this.getDashBoard3Info(s);
    }
    else if("s===dashboard4"){
      this.getDashBoard4Info(s);
    }
    else if("s===dashboard5"){
      this.getDashBoard5Info(s);
    }
  }

  getDashBoard1Info(s){
    /*axios
      .get(this.state.serverIp+s)
      .then(data =>{ 
        console.log("get data");
        if (data) {
          console.log(data);
          this.setState({
            dashboard1: data,
          })
        }
      })
      .catch(err => {
        console.log("------------------:::::",err);
        return null;
      });
    console.log(s);*/

    this.setState({
      dashboard1 : <iframe 
                    src="http://165.22.111.152:5601/app/kibana#/dashboard/55a9e6e0-a29e-11e7-928f-5dbe6f6f5519-ecs?embed=true&_g=()"
                    height="600" 
                    width="800"/>
    })
  }

  getDashBoard2Info(s){
    /*axios
      .get(this.state.serverIp+s)
      .then(data =>{ 
        console.log("get data");
        if (data) {
          console.log(data);
          this.setState({
            dashboard2: data,
          })
        }
      })
      .catch(err => {
        console.log("------------------:::::",err);
        return null;
      });

      console.log(s);*/

      this.setState({
        dashboard2 : <iframe 
                      src="http://165.22.111.152:5601/app/kibana#/dashboard/046212a0-a2a1-11e7-928f-5dbe6f6f5519-ecs?embed=true&_g=()"
                      height="600" 
                      width="800"/>
      })
  }

  getDashBoard3Info(s){
    axios
      .get(this.state.serverIp+s)
      .then(data =>{ 
        console.log("get data");
        if (data) {
          console.log(data);
          this.setState({
            dashboard3: data,
          })
        }
      })
      .catch(err => {
        console.log("------------------:::::",err);
        return null;
      });

      console.log(s);
  }

  getDashBoard4Info(s){
    axios
      .get(this.state.serverIp+s)
      .then(data =>{ 
        console.log("get data");
        if (data) {
          console.log(data);
          this.setState({
            dashboard4: data,
          })
        }
      })
      .catch(err => {
        console.log("------------------:::::",err);
        return null;
      });

      console.log(s);
  }

  getDashBoard5Info(s){
    axios
      .get(this.state.serverIp+s)
      .then(data =>{ 
        console.log("get data");
        if (data) {
          console.log(data);
          this.setState({
            dashboard5: data,
          })
        }
      })
      .catch(err => {
        console.log("------------------:::::",err);
        return null;
      });

      console.log(s);
  }

  render(){
    return(
    <div className="App">
      <header className="App-header">
        General Insight
      </header>
      <body className="App-body">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" onSelect={(k)=>this.selectTab(k)}>
        <Tab eventKey="dashboard1" title="dashboard1">
        <DashBoard1
          dashboard1 = {this.state.dashboard1}         
        />
        </Tab>
        <Tab eventKey="dashboard2" title="dashboard2">
        <DashBoard2
          dashboard2 = {this.state.dashboard2}         
        />
        </Tab>
        <Tab eventKey="dashboard3" title="dashboard3">
        <DashBoard3
          dashboard3 = {this.state.dashboard3} 
        />
        </Tab>
        <Tab eventKey="dashboard4" title="dashboard4">
        <DashBoard4
          dashboard4 = {this.state.dashboard4} 
        />
        </Tab>
        <Tab eventKey="dashboard5" title="dashboard5">
        <DashBoard5
          dashboard5 = {this.state.dashboard5} 
        />
        </Tab>
      </Tabs>
      </body>
      <footer className="App-footer">

      </footer>
    </div>
  );}
}

export default App;

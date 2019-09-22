//css디자인
//서버에 올리기

import React from 'react';
import KibanaTab from './KibanaTab'
import Iframe from 'react-iframe'
//import axios from 'axios'
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      serverIp:"http://165.22.243.237/",
      kibanadashboard1:null,
      kibanadashboard2:null,
      kibanadashboard3:null,
      kibanadashboard4:null,
      kibanadashboard5:null,
    } 
  }

  getDashBoardInfo(s){
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

    if(s==="kibanadashboard1"){
      console.log("get kibanadashboard1 info")
      this.setState({
        kibanadashboard1 : <Iframe 
                      src="http://165.22.111.152:5601/app/kibana#/dashboard/55a9e6e0-a29e-11e7-928f-5dbe6f6f5519-ecs?embed=true&_g=()"
                      height="600" 
                      width="800"/>
      })
    }
    else if(s==="kibanadashboard2"){
      this.setState({
        kibanadashboard2 : <Iframe 
                      src="http://165.22.111.152:5601/app/kibana#/dashboard/046212a0-a2a1-11e7-928f-5dbe6f6f5519-ecs?embed=true&_g=()"
                      height="600" 
                      width="800"/>
      })
    }
    else if(s==="kibanadashboard3"){
      this.setState({
        kibanadashboard3 : null,
      })
    }
    else if(s==="kibanadashboard4"){
      this.setState({
        kibanadashboard4 : null,
      })
    }
    else if(s==="kibanadashboard5"){
      this.setState({
        kibanadashboard5 : null,
      })
    }
  }

  render(){
    return(
    <div className="App">
      <header className="App-header">
        General Insight
      </header>
      <body className="App-body">
        <KibanaTab
          kibanadashboard1={this.state.kibanadashboard1}
          kibanadashboard2={this.state.kibanadashboard2}
          kibanadashboard3={this.state.kibanadashboard3}
          kibanadashboard4={this.state.kibanadashboard4}
          kibanadashboard5={this.state.kibanadashboard5}
          getDashBoardInfo={(s)=>this.getDashBoardInfo(s)}
        />
      </body>
      <footer className="App-footer">

      </footer>
    </div>
  );}
}

export default App;

//앱
import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Login from './Login'
import Register from './Register';
import ManageProject from './ManageProject';
import GiReadme from './GiReadme'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      userId:'',
      projectInfo:{},
      NavigationBarKey:0,
      loginState:0,
    }
    console.log(this.state.userId);
    console.log(this.state.NavigationBarKey);
  }

  onLogin(adminId){
    console.log("--------------::", adminId);
    if(this.state.NavigationBarKey==4){
      this.setState({
        userId: adminId,
        NavigationBarKey:0,
      });
    }
    else{
      this.setState({
        userId: adminId,
      });
    }
	}

	onLogout(){
		this.setState({
      userId:'',
      NavigationBarKey:0,
    });
    window.alert('로그아웃 되었습니다.')
  }
  
  getProjectInfo(info){
    this.setState({
			projectInfo: info
		});
  }

  setNavigationBarKey(k){
    this.setState({
      NavigationBarKey: k
    });
    console.log(this.state.NavigationBarKey)
  }

  render(){

    var NavigationBarKey = this.state.NavigationBarKey;
    let body;

    if(!this.state.userId){
      if(NavigationBarKey==0){
        body = <Login onLogin = {(s)=>this.onLogin(s)} />;
      }
      else if (NavigationBarKey==1) {
        body = <GiReadme/>
      } 
      else if(NavigationBarKey==2) {
        body = <Login onLogin = {(s)=>this.onLogin(s)} />;
      }
      else if(NavigationBarKey==3) {
      
      }
      else if(NavigationBarKey==4) {
        body = <Login onLogin = {(s)=>this.onLogin(s)} />;
      }
      else if(NavigationBarKey==5) {
        body = <Register setNavigationBarKey = {(k)=>this.setNavigationBarKey(k)}/>;
      }
    }
    else{
      if(NavigationBarKey==0){
        //body = <Main />
        body=<ManageProject userId={this.state.userId}/>
      }
      else if (NavigationBarKey==1) {
        body = <GiReadme/>
      } 
      else if(NavigationBarKey==2) {
        body=<ManageProject userId={this.state.userId}/>
      }
      else if(NavigationBarKey==3) {
      
      }
      else if(NavigationBarKey==4) {
        this.onLogout();
      }
    }
    

    return (
      <div className="App">
        <header className="App-header">
          <NavigationBar 
            onselect={(k)=>this.setNavigationBarKey(k)}
            userId={this.state.userId}/>
        </header>
        <body className="App-body">
          {body}
        </body>
        <footer className="App-footer">
          
        </footer>
      </div>
    );
  }
}

export default App;

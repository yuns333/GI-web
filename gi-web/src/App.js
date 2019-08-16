import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Login from './Login'
import Signup from './Signup';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      userid:'',
      projectInfo:{},
      NavigationBarKey:0,
      loginState:0,
    }
  }

  onLogin(adminId){
		this.setState({
			userid: userid
		});
	}

	onLogout(){
		this.setState({
			userid:''
		});
  }
  
  getProjectInfo(info){
    this.setState({
			projectInfo: info
		});
  }

  getNavigationBarKey(k){
    this.setState({
      NavigationBarKey: k
    });
    console.log(this.state.NavigationBarKey)//한박자씩 늦게 변화하는 이유?
  }

  render(){

    const NavigationBarKey = this.state.NavigationBarKey;
    let body;

    if (NavigationBarKey==1) {
   
    } 
    else if(NavigationBarKey==2) {

    }
    else if(NavigationBarKey==3) {
    
    }
    else if(NavigationBarKey==4) {
      body = <Login />;
    }
    else if(NavigationBarKey==5) {
      body = <Signup />;
    }

    return (
      <div className="App">
        <header className="App-header">
          <NavigationBar onselect={(k)=>this.getNavigationBarKey(k)}/>
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

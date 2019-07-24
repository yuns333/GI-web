import React from 'react';
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
//import {Form} from 'react-bootstrap'
//import {FormControl} from 'react-bootstrap'
//import {Button} from 'react-bootstrap'
//import Button from 'react-bootstrap/Button';
import './App.css';

class Item extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="items">
        <li className="item-list" key={this.props.item}>
          <div
            className="item-list-button"
            onClick={()=>this.props.onClick()}>
            {this.props.item}
          </div>
        </li>
      </div>
    )
  }
}

/*class Component extends React.Component{
  
}

class Pattern extends React.Component{
  
}

class SamplePage extends React.Component{
  constructor(props) {
    super(props)
  }
}

class Theme extends React.Component{
  
}*/

class Board extends React.Component{
  constructor(props){
    super(props)
  }

  handleClickItem(s){
    console.log(s);
  }  

  // shouldComponentUpdate() {
  //   console.log('Board shouldComponentUpdate rendered: ', this.props.boardId);
  // }

  // componentDidUpdate()
  // {
  //   console.log('Board componentDidUpdate rendered: ', this.props.boardId);
  // }
  
  render(){
    console.log('PropsKey: ', this.props.boardId);

    switch(this.props.boardId){
      case 0:
        return (<div> home </div>) 
      case 1:
          return (
            <div className="Items">
            {
              this.props.themes.map(item => (
                <Item
                item={item.title}
                onClick={()=>this.handleClickItem(item.source)}
                />
              ))
            }
            </div>
          )
      case 2:
          return (
            <div className="Items">
            {
              this.props.samplePages.map(item => (
                <Item
                item={item.title}
                onClick={()=>this.handleClickItem(item.source)}
                />
              ))
            }
            </div>
          )
      case 3:
          return (
            <div className="Items">
            {
              this.props.layouts.map(item => (
                <Item
                item={item.title}
                onClick={()=>this.handleClickItem(item.source)}
                />
              ))
            }
            </div>
          )
      case 4:
          return (
            <div className="Items">
            {
              this.props.patterns.map(item => (
                <Item
                item={item.title}
                onClick={()=>this.handleClickItem(item.source)}
                />
              ))
            }
            </div>
          )
      case 5:
          return (
            <div className="Items">
            {
              this.props.components.map(item => (
                <Item
                item={item.title}
                onClick={this.handleClickItem(item.source)}
                />
              ))
            }
            </div>
          )
    }
  }
}

class NavigationBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      key : 0,
    }
  }

  handleClickNavItem(i){
    console.log("handleClickNavItem; ", i);
    this.setState({
      key: i
    });
  }

  render(){
    return(
      <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Item onClick={() => this.handleClickNavItem(1)}>Theme</Nav.Item>
          <Nav.Item onClick={() => this.handleClickNavItem(2)}>Sample Page</Nav.Item>
          <Nav.Item onClick={() => this.handleClickNavItem(3)}>Layout</Nav.Item>
          <Nav.Item onClick={() => this.handleClickNavItem(4)}>Pattern</Nav.Item>
          <Nav.Item onClick={() => this.handleClickNavItem(5)}>Component</Nav.Item>
        </Nav>
        {/*<Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>*/}
        </Navbar>
        <div className="board">
        <Board
        themes = {this.props.themes}
        samplePages = {this.props.samplePages}
        layouts = {this.props.layouts}
        patterns = {this.props.patterns}
        components = {this.props.components}
        boardId = {this.state.key}
        />
        </div>
      </div>
    );
  }
}

class Footer extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="footer">
        This is footer
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      themes : this.getInitialTheme(),
      samplePages: this.getInitialSamplePage(),
      layouts: this.getInitialLayout(),
      patterns: this.getInitialPattern(),
      components: this.getInitialComponent(),
      page_info: this.getPageInfo(),
    };
  }

  getInitialTheme() {
    return [
      {
        id:1,
        title: 'SIMPLE',
        description: 'This is a simple theme.',
        source:'',
        image:'',
      },
      {
        id:2,
        title: 'DARK',
        description: 'This is a dark theme.',
        source:'',
        image:'',
      },
      {
        id:3,
        title: 'WHITE',
        description: 'This is a white theme.',
        source:'',
        image:'',
      },
      {
        id:4,
        title: 'WARM',
        description: 'This is a warm theme.',
        source:'',
        image:'',
      }
    ]
  };

  getInitialSamplePage() {
    return [
      {
        id:1,
        title: '',
        description: '',
        source:'',
        image:'',
      },
      {
        id:2,
        title: '',
        description: '',
        source:'',
        image:'',
      },
      {
        id:3,
        title: '',
        description: '',
        source:'',
        image:'',
      },
      {
        id:4,
        title: '',
        description: '',
        source:'',
        image:'',
      }
    ]
  };

  getInitialLayout() {
    return [
      {
        id:1,
        title: '',
        description: '',
        source:'',
        image:'',
      },
      {
        id:2,
        title: '',
        description: '',
        source:'',
        image:'',
      },
      {
        id:3,
        title: '',
        description: '',
        source:'',
        image:'',
      },
      {
        id:4,
        title: '',
        description: '',
        source:'',
        image:'',
      }
    ]
  };

  getInitialPattern() {
    return [
      {
        id:1,
        title: '',
        description: '',
        source:'',
        image:'',
      },
      {
        id:2,
        title: '',
        description: '',
        source:'',
        image:'',
      },
      {
        id:3,
        title: '',
        description: '',
        source:'',
        image:'',
      },
      {
        id:4,
        title: '',
        description: '',
        source:'',
        image:'',
      }
    ]
  };

  getInitialComponent() {
    return [
      {
        id:1,
        title: '',
        description: '',
        source:'',
        image:'',
      },
      {
        id:2,
        title: '',
        description: '',
        source:'',
        image:'',
      },
      {
        id:3,
        title: '',
        description: '',
        source:'',
        image:'',
      },
      {
        id:4,
        title: '',
        description: '',
        source:'',
        image:'',
      }
    ]
  };
  
  getPageInfo(){

  }

  render() {
    return(
    <div className="App">
      <header className="App-header">
        <div className="logo">
        UX Studio
        </div>
      </header>
      <body className="App-body">
        <NavigationBar
          themes = {this.state.themes}
          samplePages = {this.state.samplePages}
          layouts = {this.state.layouts}
          patterns = {this.state.patterns}
          components = {this.state.components}
        />
      </body>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
  }
}

export default App;

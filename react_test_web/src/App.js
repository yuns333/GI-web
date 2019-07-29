//item layout
//서버에 올리기

import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import axios from 'axios';
import black from './black.jpg';
import { Grid } from 'semantic-ui-react'
//import {Form} from 'react-bootstrap'
//import {FormControl} from 'react-bootstrap'
//import {Button} from 'react-bootstrap'
//import Button from 'react-bootstrap/Button';
import './App.css';

function sendRequsetToGi(s) {
  let response = axios
      .get("http://165.22.243.237/api"+s)
      .then(data =>{ 
        console.log("get data");
        if (data) {
          console.log(data);
        }
      })
      .catch(err => {
        console.log("------------------:::::",err);
        return null;
      });
}

class Item extends React.Component{
  constructor(props) {
    super(props)
  }

  handleClickItem(s,key){
    if(key===1){
      sendRequsetToGi('/theme/'+s);
    }
    else if(key===2){
      sendRequsetToGi('/samplepage/'+s);
    }
    else if(key===3){
      sendRequsetToGi('/layout/'+s);
    }
    else if(key===4){
      sendRequsetToGi('/pattern/'+s);
    }
    else if(key===5){
      sendRequsetToGi('/component/'+s);
    }
    console.log(s);
    console.log(key);
  }  

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        <Button variant="primary" onClick={()=>this.handleClickItem(this.props.title,this.props.id)}>Go</Button>
        </Card.Body>
      </Card>
    )
  }

  componentDidMount(){
    console.log("componentDidMount")
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
            <Grid columns={2} divided>
              <Grid.Row>
              {
                this.props.themes.map(item => (
                <Item
                title = {item.title}
                description = {item.description}
                source = {item.source}
                image = {item.image}
                id={this.props.boardId}
                  />
                ))
              }
              </Grid.Row>
            </Grid>
          )
      case 2:
          return (
            <Grid columns={2} divided>
              <Grid.Row>
              {
                this.props.samplePages.map(item => (
                <Item
                title = {item.title}
                description = {item.description}
                source = {item.source}
                image = {item.image}
                id={this.props.boardId}
                  />
                ))
              }
              </Grid.Row>
            </Grid>
          )
      case 3:
          return (
            <Grid columns={2} divided>
              <Grid.Row>
              {
                this.props.layouts.map(item => (
                <Item
                title = {item.title}
                description = {item.description}
                source = {item.source}
                image = {item.image}
                id={this.props.boardId}
                  />
                ))
              }
              </Grid.Row>
            </Grid>
          )
      case 4:
          return (
            <Grid columns={2} divided>
              <Grid.Row>
              {
                this.props.patterns.map(item => (
                <Item
                title = {item.title}
                description = {item.description}
                source = {item.source}
                image = {item.image}
                id={this.props.boardId}
                  />
                ))
              }
              </Grid.Row>
            </Grid>
          )
      case 5:
          return (
            <Grid columns={2} divided>
              <Grid.Row>
              {
                this.props.components.map(item => (
                <Item
                title = {item.title}
                description = {item.description}
                source = {item.source}
                image = {item.image}
                id={this.props.boardId}
                  />
                ))
              }
              </Grid.Row>
            </Grid>
          )
    }
  }
}

class NavigationBar extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand onClick={() => this.props.onclick(0)}>UX Studio</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => this.props.onclick(1)}>Theme</Nav.Link>
          <Nav.Link onClick={() => this.props.onclick(2)}>Sample Page</Nav.Link>
          <Nav.Link onClick={() => this.props.onclick(3)}>Layout</Nav.Link>
          <Nav.Link onClick={() => this.props.onclick(4)}>Pattern</Nav.Link>
          <Nav.Link onClick={() => this.props.onclick(5)}>Component</Nav.Link>
        </Nav>
        {/*<Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>*/}
        </Navbar>
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
      key: 0,
    };
  }

  handleClickNavItem(i){
    console.log("handleClickNavItem; ", i);
    this.setState({
      key: i
    });
  }

  getInitialTheme() {
    return [
      {
        id:1,
        title: 'SIMPLE',
        description: 'This is a simple theme.',
        source:'simple',
        image: black,
      },
      {
        id:2,
        title: 'DARK',
        description: 'This is a dark theme.',
        source:'dark',
        image: black,
      },
      {
        id:3,
        title: 'WHITE',
        description: 'This is a white theme.',
        source:'white',
        image: black,
      },
      {
        id:4,
        title: 'WARM',
        description: 'This is a warm theme.',
        source:'warm',
        image: black,
      }
    ]
  };

  getInitialSamplePage() {
    return [
      {
        id:1,
        title: 'SAMPLE PAGE1',
        description: 'This is a sample page1',
        source:'samplepage1',
        image:'',
      },
      {
        id:2,
        title: 'SAMPLE PAGE2',
        description: 'This is a sample page2',
        source:'samplepage2',
        image:'',
      },
      {
        id:3,
        title: 'SAMPLE PAGE3',
        description: 'This is a sample page3',
        source:'samplepage3',
        image:'',
      },
      {
        id:4,
        title: 'SAMPLE PAGE4',
        description: 'This is sample page4',
        source:'samplepage4',
        image:'',
      }
    ]
  };

  getInitialLayout() {
    return [
      {
        id:1,
        title: 'LAYOUT1',
        description: 'This is layout1',
        source:'layout1',
        image:'',
      },
      {
        id:2,
        title: 'LAYOUT2',
        description: 'This is layout2',
        source:'layout2',
        image:'',
      },
      {
        id:3,
        title: 'LAYOUT3',
        description: 'This is layout3',
        source:'layout3',
        image:'',
      },
      {
        id:4,
        title: 'LAYOUT4',
        description: 'This is layout4',
        source:'layout4',
        image:'',
      }
    ]
  };

  getInitialPattern() {
    return [
      {
        id:1,
        title: 'PATTERN1',
        description: 'This is pattern1',
        source:'pattern1',
        image:'',
      },
      {
        id:2,
        title: 'PATTERN2',
        description: 'This is pattern2',
        source:'pattern2',
        image:'',
      },
      {
        id:3,
        title: 'PATTERN3',
        description: 'This is pattern3',
        source:'pattern3',
        image:'',
      },
      {
        id:4,
        title: 'PATTERN4',
        description: 'This is pattern4',
        source:'pattern4',
        image:'',
      }
    ]
  };

  getInitialComponent() {
    return [
      {
        id:1,
        title: 'COMPONENT1',
        description: 'This is component1',
        source:'component1',
        image:'',
      },
      {
        id:2,
        title: 'COMPONENT2',
        description: 'This is component2',
        source:'component2',
        image:'',
      },
      {
        id:3,
        title: 'COMPONENT3',
        description: 'This is component3',
        image:'component3',
        source:'',
      },
      {
        id:4,
        title: 'COMPONENT4',
        description: 'This is component4',
        source:'component4',
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
        <NavigationBar
          onclick = {(i)=>this.handleClickNavItem(i)}
        />
        </div>
      </header>
      <body className="App-body">
        <div className="board">
          <Board
            themes = {this.state.themes}
            samplePages = {this.state.samplePages}
            layouts = {this.state.layouts}
            patterns = {this.state.patterns}
            components = {this.state.components}
            boardId = {this.state.key}
          />
        </div>
      </body>
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
  }

  componentDidMount(){
    console.log("componentDidMount");
    sendRequsetToGi();
  }
}

export default App;

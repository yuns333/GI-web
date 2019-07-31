import React from 'react';

import NavigationBar from './NavigationBar'
import Board from './Board'
import Footer from './Footer'
import './App.css';
import black from './black.jpg';
import img_001 from './001.png'
import img_003 from './003.png'
import dark from './dark.png'



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
        image: img_001,
      },
      {
        id:2,
        title: 'BLACK',
        description: 'This is a dark theme.',
        source:'black',
        image: black,
      },
      {
        id:3,
        title: 'WHITE',
        description: 'This is a white theme.',
        source:'white',
        image: img_003,
      },
      {
        id:4,
        title: 'DARK',
        description: 'This is a warm theme.',
        source:'dark',
        image: dark,
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
}

export default App;

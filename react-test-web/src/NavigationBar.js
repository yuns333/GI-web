import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';


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

  export default NavigationBar;
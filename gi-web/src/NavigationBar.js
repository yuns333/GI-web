import React from 'react';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

class NavigationBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let body;

        if(!this.props.userId){
            body = 
            <Navbar bg="dark"  variant="dark" onSelect={(k)=>this.props.onselect(k)}>
            <Navbar.Brand>
                <Nav.Link eventKey="0">Generall Insight</Nav.Link>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link eventKey="1">서비스 소개</Nav.Link>
                <Nav.Link eventKey="2">프로젝트 관리</Nav.Link>
                <Nav.Link eventKey="3">공지사항</Nav.Link>
            </Nav>
            <Form inline>
                <Nav.Link eventKey="4">로그인</Nav.Link>
                <Nav.Link eventKey="5">회원가입</Nav.Link>
            </Form>
            </Navbar>
        }
        else{
            body = null;
        }
        return(
            <div>
                {body}
            </div>
        )
    }
}

export default NavigationBar;
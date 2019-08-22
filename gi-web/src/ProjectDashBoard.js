import React from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'
import {ButtonGroup} from 'react-bootstrap'
import TopPages from './TopPages'
import Browsers from './Browsers';
import Devices from './Devices';
import Os from './Os';
import ActiveUsers from './ActiveUsers';
import TotalUsers from './TotalUsers';
import Funnel from './Funnel';
import Referrers from './Referres';

class ProjectDashBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            period: 'w'
        };
    }
    setPeriod(k){
        this.setState({
            period: k,
        })
    }


    render(){
      console.log("--------------period::", this.state.period);
        return(
            <div>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="secondary" onClick={(k)=>this.setPeriod("d")}>day</Button>
                  <Button variant="secondary" onClick={(k)=>this.setPeriod("w")}>week</Button>
                  <Button variant="secondary" onClick={(k)=>this.setPeriod("M")}>month</Button>
                </ButtonGroup>
                <div>
                <Browsers userId ={this.props.userId} projectName={this.props.projectName} period={this.state.period}/>
                <Devices userId ={this.props.userId} projectName={this.props.projectName} period={this.state.period}/>
                <Os userId ={this.props.userId} projectName={this.props.projectName} period={this.state.period}/>
                </div>
                <div>
                <ActiveUsers userId ={this.props.userId} projectName={this.props.projectName} period={this.state.period}/>
                <TotalUsers userId ={this.props.userId} projectName={this.props.projectName} period={this.state.period}/>
                </div>
                <div>
                <TopPages userId ={this.props.userId} projectName={this.props.projectName} period={this.state.period}/>
                <Funnel userId ={this.props.userId} projectName={this.props.projectName}/>
                <Referrers userId ={this.props.userId} projectName={this.props.projectName} period={this.state.period}/>
                </div>
            </div>
        )
    }
}

export default ProjectDashBoard;
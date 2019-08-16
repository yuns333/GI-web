import React from 'react';
import {Tabs} from 'react-bootstrap'
import {Tab} from 'react-bootstrap'
import KibanaDashBoard from './KibanaDashBoard'

class KibanaTab extends React.Component{
    constructor(props){
      super(props)
    }
  
    render(){
      return(
        <Tabs 
          defaultActiveKey="profile" 
          id="uncontrolled-tab-example" 
          onSelect={(k)=>this.props.getDashBoardInfo(k)}>
          <Tab 
            eventKey="kibanadashboard1" 
            title="dashboard1">
          <KibanaDashBoard
            kibanadashboard = {this.props.kibanadashboard1}         
          />
          </Tab>
          <Tab 
            eventKey="kibanadashboard2" 
            title="dashboard2">
          <KibanaDashBoard
            kibanadashboard = {this.props.kibanadashboard2}         
          />
          </Tab>
          <Tab 
            eventKey="kibanadashboard3" 
            title="dashboard3">
          <KibanaDashBoard
            kibanadashboard = {this.props.kibanadashboard3} 
          />
          </Tab>
          <Tab 
            eventKey="kibanadashboard4" 
            title="dashboard4">
          <KibanaDashBoard
            kibanadashboard = {this.props.kibanadashboard4} 
          />
          </Tab>
          <Tab 
            eventKey="kibanadashboard5" 
            title="dashboard5">
          <KibanaDashBoard
            kibanadashboard = {this.props.kibanadashboard5} 
          />
          </Tab>
        </Tabs>
      )
    }
  }

  export default KibanaTab;
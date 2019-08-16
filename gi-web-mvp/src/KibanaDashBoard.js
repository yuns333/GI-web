import React from 'react';

class KibanaDashBoard extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div className="dashboard1">
          {this.props.kibanadashboard}
        </div>
      )
    }
}

export default KibanaDashBoard


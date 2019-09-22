import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import sendRequsetToGi from './sendRequsetToGi'

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
        <Card style={{ width: '18rem', margin: "10px"}}>
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

  export default Item;
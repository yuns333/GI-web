import React from 'react';
import Item from './Item'
import { Grid } from 'semantic-ui-react'

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

  export default Board;
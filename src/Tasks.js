import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Task from './Task'

class Tasks extends Component {
  constructor(props) {
      super(props)
      this.renderTasks = this.renderTasks.bind(this)
  }
  
  renderTasks(){
    let renderedTasks = null;
    if(this.props.tasks){
        if(Array.isArray(this.props.tasks.task)) {
            renderedTasks =  this.props.tasks.task.map((task, index) => {
                return (
                <li key={index}>
                    <Task task={task} />
                </li>
                ) 
            })
        }

        else {
            renderedTasks = (
            <li>
            <Tasks result={this.props.tasks.task} />
            </li>
            )
        }

        return renderedTasks
    }
    else {
        return 'there is no tasks'
    }
  }
  
  render(){
    return (
      <Grid>
      <Row>
        <Col xs={8} md={8}>
          <ol>
           {this.renderTasks()}
          </ol>
        </Col>
      </Row>
    </Grid>
    )
  }
}

export default Tasks
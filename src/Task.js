import React, { Component } from 'react'
import { Button, Collapse, Panel, Well } from 'react-bootstrap'


class Task extends Component {
  constructor(props) {
      super(props)
      this.state = {open: false};
  }

  render(){
    const { task } = this.props
    const doneStyle = task._attributes && task._attributes.done === 'true'? 'success' : 'danger' 
    return (
      <div>
      <Button onClick={() => this.setState({ open: !this.state.open })}>
        {task.taskTitle._text}
      </Button>
      <Collapse in={this.state.open}>
        <div>
          <Well>
            <Panel header='Done' bsStyle={doneStyle}>
                {task._attributes.done}
            </Panel>
            <Panel header="Assignee" bsStyle="primary">
                {task._attributes.assignee}
            </Panel>
          </Well>
        </div>
      </Collapse>
      </div> 
    )
  }
}

export default Task
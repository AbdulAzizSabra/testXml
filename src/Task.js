import React, { Component } from 'react';
import {
  Button,
  Collapse,
  Panel,
  Well,
  Label,
  Glyphicon
} from 'react-bootstrap';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const { task } = this.props;
    let done;
    switch (task._attributes.done) {
      case 'done':
        done = 'success';
        break;
      case 'inprogress':
        done = 'info';
        break;
      case 'not':
        done = 'danger';
        break;
    }
    return (
      <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          {task.taskTitle._text} &nbsp;<Label bsStyle={done}>
            {task._attributes.done.toUpperCase()}
          </Label>
          &nbsp;
          <Label bsStyle="default">
            <Glyphicon glyph="glyphicon glyphicon-user" /> &nbsp;
            {task._attributes.assignee}
          </Label>
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>Some more info Here</Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Task;

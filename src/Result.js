import React, { Component } from 'react';
import { Button, Collapse, Panel, Well, Label } from 'react-bootstrap';
import Tasks from './tasks';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const { result } = this.props;
    const tasks = result.tasks ? (
      <Tasks tasks={result.tasks} />
    ) : (
      'There is no tasks here'
    );
    const achievedStyle =
      result._attributes && result._attributes.achieved === 'true'
        ? 'success'
        : 'danger';
    return (
      <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          {result.resultTitle._text} &nbsp;{result._attributes.achieved ==
          'true' ? (
            <Label bsStyle="success">Achieved</Label>
          ) : (
            <Label bsStyle="danger">Not achieved</Label>
          )}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Panel header="Tasks" bsStyle="primary">
                {tasks}
              </Panel>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Result;

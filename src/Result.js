import React, { Component } from 'react'
import { Button, Collapse, Panel, Well } from 'react-bootstrap'
import Tasks from './tasks'

class Result extends Component {
  constructor(props) {
      super(props)
      this.state = {open: false};

  }

  render(){
    const { result } = this.props
    const tasks = result.tasks ? (<Tasks tasks={result.tasks} />) : 'There is no tasks here'
    const achievedStyle = result._attributes && result._attributes.achieved === 'true'? 'success' : 'danger' 
    return (
      <div>
      <Button onClick={() => this.setState({ open: !this.state.open })}>
        {result.resultTitle._text}
      </Button>
      <Collapse in={this.state.open}>
        <div>
          <Well>
            <Panel header='Done' bsStyle={achievedStyle}>
                {result._attributes.achieved}
            </Panel>
            <Panel header="Tasks" bsStyle="primary">
                {tasks}
            </Panel>
          </Well>
        </div>
      </Collapse>
      </div> 
    )
  }
}

export default Result
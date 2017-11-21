import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Collapse,
  Panel,
  Well,
  Label,
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import Results from './Results';
import Journey from './Journey';

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  renderResults() {
    let renderedResults = null;

    if (this.props.step.hasOwnProperty('results')) {
      renderedResults = (
        <Panel header="Results" bsStyle="primary">
          <Results results={this.props.step.results} />
        </Panel>
      );
    } else if (this.props.step.hasOwnProperty('subJourney')) {
      renderedResults = (
        <Panel header="Sub Journey" bsStyle="primary">
          <Grid>
            <Row>
              <Col xs={10}>
                <Journey journey={this.props.step.subJourney} />
              </Col>
            </Row>
          </Grid>
        </Panel>
      );
    }

    return renderedResults;
  }

  render() {
    if (!this.props.details) return 'Loading...';
    console.log(this.props.details);
    const { step } = this.props;
    const doneStyle =
      step.objective._attributes.done === 'true' ? 'success' : 'danger';
    return (
      <div>
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          {step.stepTitle._text}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Panel header="Objective" bsStyle="primary">
                {step.objective._text} &nbsp;{step.objective._attributes.done ==
                'true' ? (
                  <Label bsStyle="success">Achieved</Label>
                ) : (
                  <Label bsStyle="danger">Not achieved</Label>
                )}
              </Panel>

              <Panel header="Problem" bsStyle="warning">
                {step.problemStatement._text}
              </Panel>
              <Panel header="Start Date and end Date" bsStyle="info">
                {step._attributes.startDate} -----> {step._attributes.endDate}
              </Panel>
              {this.renderResults()}
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

function mapStateToProps({ details }) {
  return { details };
}

export default connect(mapStateToProps)(Step);

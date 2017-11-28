import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Step from './Step';
import { fetchJourney, calculateDetails } from './actions';

class Steps extends Component {
  // constructor(props) {
  //   super(props);
  //   this.renderSteps = this.renderSteps.bind(this);
  // }

  componentDidMount() {
    if (!this.props.journeys) {
      this.props.fetchJourney();
    }
    const currentJourney = this.props.journeys.find(
      journey => journey._attributes.id === this.props.match.params.id
    );
    this.props.calculateDetails(currentJourney);
  }

  renderSteps = () => {
    let renderedSteps = null;
    const currentJourney = this.props.journeys.find(
      journey => journey._attributes.id === this.props.match.params.id
    );
    if (Array.isArray(currentJourney.steps.step)) {
      renderedSteps = currentJourney.steps.step.map((step, index) => {
        return (
          <li key={index}>
            <Step step={step} index={index} {...this.props} />
          </li>
        );
      });
    } else {
      renderedSteps = (
        <li>
          <Step step={currentJourney.steps.step} />
        </li>
      );
    }

    return renderedSteps;
  };

  render() {
    if (!this.props.journeys) return 'loading...';

    return (
      <Grid>
        <Row>
          <Col>
            <Button
              bsStyle="primary"
              onClick={() => this.props.history.push('/')}
            >
              Go Back
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <ol>{this.renderSteps()}</ol>
          </Col>
        </Row>
      </Grid>
    );
  }
}
function mapStateToProps({ journeys }) {
  return { journeys };
}
export default connect(mapStateToProps, { fetchJourney, calculateDetails })(
  Steps
);

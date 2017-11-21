import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Step from './Step';

class Steps extends Component {
  constructor(props) {
    super(props);
    this.renderSteps = this.renderSteps.bind(this);
  }

  renderSteps() {
    let renderedSteps = null;
    if (Array.isArray(this.props.steps)) {
      renderedSteps = this.props.steps.map((step, index) => {
        return (
          <li key={index}>
            <Step step={step} index={index} />
          </li>
        );
      });
    } else {
      renderedSteps = (
        <li>
          <Step step={this.props.steps} />
        </li>
      );
    }

    return renderedSteps;
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <ol>{this.renderSteps()}</ol>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Steps;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import Steps from './Steps';
import { Gantt } from './Gantt';
import { calculateDetails } from './actions';

class Journey extends React.Component {
  componentDidMount() {
    this.props.calculateDetails(this.props.journey);
    //console.log(this.props.journey);
  }
  render() {
    const { journey } = this.props;
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Thumbnail src="../photos/Master.png" alt="242x200">
                <h3>{journey.title._text}</h3>
                <p>{journey.goal._text}</p>
                <p>
                  <Button
                    bsStyle="primary"
                    onClick={() => props.history.push('/')}
                  >
                    Steps
                  </Button>
                  <Button
                    onClick={() => {
                      props.history.push('/gantt');
                    }}
                  >
                    GanttChart
                  </Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => <Steps steps={journey.steps.step} />}
                />
                <div className="gantt-container" style={{ height: '500px' }}>
                  <Route
                    path="/gantt"
                    render={() => <Gantt steps={journey.steps.step} />}
                  />
                </div>
              </Switch>
            </Col>
          </Row>
          <Row>
            <Col>
              {this.props.details ? JSON.stringify(this.props.details) : null}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ journeys, details }) {
  return { myJourneys: journeys, details };
}

export default connect(mapStateToProps, { calculateDetails })(Journey);

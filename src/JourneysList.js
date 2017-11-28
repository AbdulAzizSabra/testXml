import React from 'react';
import { connect } from 'react-redux';
import Journey from './Journey';
import { calculateDetails } from './actions';
import { Col, Button, Thumbnail } from 'react-bootstrap';

class JourneysList extends React.Component {
  render() {
    if (!this.props.journeys) return 'Loading...';

    return (
      <div>
        {this.props.journeys.map(journey => (
          <Col xs={6} md={4}>
            <Thumbnail src="../photos/Master.png" alt="242x200">
              <h3>{journey.title._text}</h3>
              <p>{journey.goal._text}</p>
              <p>
                <Button
                  bsStyle="primary"
                  onClick={() =>
                    this.props.history.push(
                      `/journey/${journey._attributes.id}`
                    )}
                >
                  Steps
                </Button>
                <Button
                  onClick={() => {
                    this.props.history.push(`/gantt`);
                  }}
                >
                  GanttChart
                </Button>
              </p>
            </Thumbnail>
          </Col>
        ))}
      </div>
    );
  }
  // console.log('journeys props', props.journeys);
  // return <Journey journey={props.journeys.journey} {...props} />;
}

function mapStatetoProps({ journeys }) {
  return { journeys };
}
export default connect(mapStatetoProps, { calculateDetails })(JourneysList);

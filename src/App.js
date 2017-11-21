import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import Journeys from './Journeys';
import { fetchJourney } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchJourney();
  }

  render() {
    if (!this.props.journeys) return 'Loading';
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <PageHeader>Journeys</PageHeader>
            </Col>
          </Row>
        </Grid>
        <Journeys journeys={this.props.journeys} {...this.props} />
      </div>
    );
  }
}

function mapStateToProps({ journeys }) {
  return { journeys };
}
export default connect(mapStateToProps, { fetchJourney })(App);

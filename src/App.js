import React, { Component } from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import Journeys from './Journeys';
import convert from 'xml-js';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      journeys: null
    }
  }
  
  componentWillMount() {    
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'journey.xml', false);
    xhttp.send();
    const responseText = xhttp.responseText;
    let resultObject = convert.xml2json(responseText, {
      compact: true,
      spaces: 4
    });
    
    const parsedResult = JSON.parse(resultObject)
    const { journeys } = parsedResult.account
    this.setState({journeys: journeys})  
  }

  render() {
    return (
      <div>
        <Grid>
        <Row className="show-grid">
          <Col xs={12}>
          <PageHeader>Journeys</PageHeader>
          </Col>
        </Row>
        </Grid>
        <Journeys journeys={this.state.journeys} />
      </div>
    );
  }
}
export { App };

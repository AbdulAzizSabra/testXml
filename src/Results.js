import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Result from './Result'

class Results extends Component {
  constructor(props) {
      super(props)
      this.renderResults = this.renderResults.bind(this)
  }
  
  renderResults() {
    let renderedResults = null;
    if(Array.isArray(this.props.results.result)) {
      renderedResults =  this.props.results.result.map((result, index) => {
        return (
         <li key={index}>
          <Result result={result} />
         </li>
        ) 
     })
    }
    else {
      renderedResults = (
        <li>
        <Result result={this.props.results.result} />
       </li>
      )
    }
     return renderedResults
  }
  
  render(){
    return (
      <Grid>
      <Row>
        <Col xs={10} md={10}>
          <ol>
           {this.renderResults()}
          </ol>
        </Col>
      </Row>
    </Grid>
    )
  }
}

export default Results
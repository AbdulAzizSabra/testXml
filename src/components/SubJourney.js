import React from 'react';
import Comp1 from './Comp1';
import { connect } from 'react-redux';

export class SubJourney extends React.Component {
  render() {
    return <Comp1 journey={this.props.journey} />;
  }
}

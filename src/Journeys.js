import React from 'react';
import Journey from './Journey';

const Journeys = props => {
  console.log('journeys props', props.journeys);
  return <Journey journey={props.journeys.journey} {...props} />;
};

export default Journeys;

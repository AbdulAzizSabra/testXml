import React from 'react';
import {
  Accordion,
  Icon,
  Divider,
  Segment,
  Header,
  Label,
  Tab,
  Menu,
  List,
  Form,
  Image,
  Checkbox
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { StepDetails } from './StepDetails';

class Comp1 extends React.Component {
  state = { activeIndex: -1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    if (!this.props.journey) return null;

    const currentJourney = this.props.journey;
    console.log(currentJourney);
    const { activeIndex } = this.state;
    let icon;
    switch (currentJourney._attributes.type) {
      case 'seq':
        icon = <Icon name="arrow down" />;
        break;
      case 'loop':
        icon = <Icon name="repeat" />;
        break;
      case 'parallel':
        icon = <Icon name="unordered list" />;
        break;
    }

    return (
      <div>
        <Header>
          {icon} &nbsp; {currentJourney.title._text}
        </Header>
        <Accordion fluid styled>
          {currentJourney.steps.step.map((step, index) => {
            return (
              <div key={`index.${index}`}>
                <Accordion.Title
                  active={activeIndex === index}
                  index={index}
                  onClick={this.handleClick}
                >
                  <Icon name="dropdown" />
                  {step.hasOwnProperty('results') ? (
                    <Icon name="marker" />
                  ) : (
                    <Icon name="map" />
                  )}
                  {step.stepTitle._text} &nbsp;|
                  <Icon name="hourglass start" color="green" />
                  {step._attributes.startDate} &nbsp;|
                  <Icon name="hourglass end" color="red" />
                  {step._attributes.endDate}&nbsp;|
                  <Icon name="clock" color="grey" />
                  {step._attributes.duration}&nbsp;|
                  {step.objective._attributes.done == 'true' ? (
                    <span>
                      <Icon name="checkmark" color="green" />Achieved &nbsp;
                    </span>
                  ) : (
                    <span>
                      <Icon name="remove" color="red" />Not Achieved&nbsp;
                    </span>
                  )}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                  {step.hasOwnProperty('subJourney') ? (
                    <Comp1 journey={step.subJourney} />
                  ) : (
                    <StepDetails step={step} />
                  )}
                </Accordion.Content>
              </div>
            );
          })}
        </Accordion>
      </div>
    );
  }
}
function mapStateToProps({ journeys }) {
  return { journeys };
}
export default connect(mapStateToProps, { actions })(Comp1);

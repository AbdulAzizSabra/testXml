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
  Checkbox,
  Progress
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { StepDetails } from './StepDetails';
import { SubJourney } from './SubJourney';
import { Iterations } from './Iterations';

class Comp1 extends React.Component {
  state = { activeIndex: -1 };

  componentDidMount() {
    if (this.props.calculateDetails) {
      this.props.calculateDetails(this.props.journey);
    }
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    const currentJourney = this.props.journey;
    const journeyDetails = this.props.details.find(
      item => item.id === currentJourney._attributes.id
    );
    if (!journeyDetails) return null;
    const { activeIndex } = this.state;
    let icon;
    switch (currentJourney._attributes.type) {
      case 'seq':
        icon = <Icon name="arrow down" />;
        break;
      case 'loop-seq' || 'loop-par' || 'loop-rand':
        icon = <Icon name="repeat" />;
        break;
      case 'parallel':
        icon = <Icon name="unordered list" />;
        break;
    }

    const panes = [
      {
        menuItem: 'Milestone 1',
        render: () => (
          <Tab.Pane>
            References to results and the date of the milestone
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Milestone 2',
        render: () => (
          <Tab.Pane>
            References to results and the date of the milestone
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Milestone 3',
        render: () => (
          <Tab.Pane>
            References to results and the date of the milestone
          </Tab.Pane>
        )
      }
    ];

    return (
      <div>
        <Header>
          {icon} &nbsp; {currentJourney.title._text}
        </Header>
        <Accordion fluid styled>
          {currentJourney.steps.step.map((step, index) => {
            const details = journeyDetails.stepsDetails.find(
              item => item.index === index
            );
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
                    <SubJourney journey={step.subJourney} />
                  ) : (
                    <StepDetails step={step} details={details} />
                  )}
                </Accordion.Content>
              </div>
            );
          })}
        </Accordion>

        <Segment>
          <Header>Some Details on the Journey</Header>
          <Progress
            value={journeyDetails.achievedObjectives}
            total={currentJourney.steps.step.length}
            progress="ratio"
          >
            Objectives
          </Progress>
          <Progress
            value={journeyDetails.achievedResults}
            total={journeyDetails.allResults}
            progress="ratio"
          >
            Results
          </Progress>
        </Segment>
        {currentJourney.hasOwnProperty('iterations') ? (
          <Iterations iterations={currentJourney.iterations} />
        ) : null}

        <Segment>
          <Header>Milestones</Header>
          <Tab panes={panes} />
        </Segment>
      </div>
    );
  }
}
function mapStateToProps({ journeys, details }) {
  return { journeys, details };
}
export default connect(mapStateToProps, actions)(Comp1);
